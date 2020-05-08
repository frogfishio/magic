import { HttpClient, HttpHeaders } from "@angular/common/http";

import {
  Component,
  Input,
  Renderer2,
  ElementRef,
  OnInit,
  Directive
} from "@angular/core";
import { AuthService } from "../../service/auth.service";
import { SharedDataService } from "src/app/service/shared.service";
import { ConfigurationService } from "src/app/service/configuration.service";

@Component({
  selector: "mg-img",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"]
})
export class MgImageComponent implements OnInit {
  @Input() prefix: string = ""; // prepend to image src url
  @Input() suffix: string = ""; // append to the image src url

  @Input() mode = ""; // round | anything else = default
  @Input() spinnerMode: string; // round | anything else = default
  @Input() spinnerSize = 50; // round | anything else = default

  @Input("default") defaultImage;
  @Input() loading;
  @Input() error;
  @Input() upload: string; // upload service URL
  @Input() meta; // meta data to push with upload
  @Input() token: string; // OAuth bearer token
  @Input() acceptDrop: boolean;
  @Input() autoUpload: boolean;

  @Input() onLoaded;
  @Input() onError;
  @Input() onUploaded;

  @Input() onClicked;
  @Input() onSelected;
  @Input() onDeleted;

  @Input()
  set src(value) {
    this._src = value;
    if (this.src) {
      if (typeof this._src === "string") {
        this.loadImage();
      } else {
        this.loadPreview(this._src, err => {
          if (err) {
            return console.log("Error loading file: " + err);
          }

          if (Boolean(this.autoUpload)) {
            this.uploadFile(this.src)
              .then(result => {
                console.log(`Upload returned X: ${JSON.stringify(result)}`);
                this._result = result.shortid;
                if (this.onUploaded) {
                  this.onUploaded(result);
                }
              })
              .catch(ex => {
                console.log(`Upload returned Y: ${JSON.stringify(ex)}`);
              });
          }
        });
      }
    } else if (this.defaultImage) {
      this.activeImage = this.defaultImage;
    }
  }

  private _src;
  private _state = "init";
  private _busy = false;
  private _last_state;
  private _result;

  get src() {
    if (this._result) {
      return this._result;
    }
    return this._src;
  }

  activeImage;
  selected = false;

  get state() {
    return this._state;
  }

  get busy() {
    return this._busy;
  }

  constructor(
    private _elementRef: ElementRef,
    private auth: AuthService,
    private _http: HttpClient,
    private _shared: SharedDataService,
    private _configuration: ConfigurationService
  ) {
    this.prefix = _configuration.get("api") + "/content/render/"; //http://localhost:8888/v1/content/render/
  }

  isDropTarget(el) {
    return el === this._elementRef.nativeElement.querySelector("div");
  }

  click() {
    if (this.onClicked) {
      return this.onClicked(this);
    }
  }

  select() {
    this.selected = !this.selected;
    if (this.onSelected) {
      return this.onSelected(this);
    }
  }

  deselect() {
    this.selected = false;
    if (this.onSelected) {
      return this.onSelected(this);
    }
  }

  remove() {
    if (this.onDeleted) {
      return this.onDeleted(this);
    }
  }

  private loadPreview(file, callback) {
    const reader = new FileReader();
    reader.onload = ev => {
      const image = new Image();
      image.src = ev.target["result"].toString();
      this.activeImage = image.src;
      callback();
    };
    reader.onerror = ev => {};
    reader.onprogress = ev => {};

    reader.readAsDataURL(file);
  }

  private uploadFile(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append("type", "image");
      formData.append("file", file);
      formData.append("selector", "listing-image");
      console.log("upload with token ", this.auth.token);

      xhr.open("POST", this.upload);

      xhr.setRequestHeader("authorization", "Bearer " + this.auth.token);

      xhr.addEventListener("load", ev => {
        this._busy = false;
        console.log("------- load --------" + xhr.responseText);
        return resolve(JSON.parse(xhr.responseText));
        // if (this.onUploaded) {
        //   this.onUploaded(JSON.parse(xhr.responseText));
        // }
      });

      xhr.upload.addEventListener("error", ev => {
        console.log("Error uploading file: " + ev);
        console.log("RESE: " + xhr.responseText);
        return reject(xhr.responseText);
      });

      xhr.upload.addEventListener("progress", pe => {
        if (pe.lengthComputable) {
          console.log("Total: " + pe.total);
          console.log("Val: " + pe.loaded);
        }
      });

      xhr.addEventListener("loadend", ev => {
        console.log("loadend: " + ev);
        console.log("RES: " + xhr.responseText);
      });

      // this.showSpinner();
      this._busy = true;
      xhr.send(formData);
    });
  }

  private initDrop() {
    const container = this._elementRef.nativeElement.querySelector("div");
    container.ondragenter = () => {
      if (!this._busy) {
        if (!this._last_state) {
          this._last_state = this._state;
        }
        this._state = "drag";
        console.log("enter");
      }
    };
    container.ondragover = ev => {
      ev.preventDefault();
    };
    container.ondragleave = () => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = null;
        console.log("leave");
      }
    };
    container.ondrop = ev => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = null;
        ev.preventDefault();
        console.log("DRO: " + ev.dataTransfer.files[0].name);
        const file = ev.dataTransfer.files[0];
        this.loadPreview(file, () => {
          console.log("File displayed");
          this.uploadFile(file).then(result => {
            console.log(`File uploaded with result ${JSON.stringify(result)}`);
            if (this.onUploaded) {
              this.onUploaded(result);
            }
          });
        });
      }
    };
  }

  private loadImage() {
    this._state = "loading";
    this._busy = true;
    if (this.loading) {
      this.activeImage = this.loading;
    } else {
      this.activeImage = this.defaultImage;
    }

    const image = new Image();
    image.addEventListener("load", () => {
      setTimeout(() => {
        this._state = "ready";
        this.activeImage = image.src;
        this._busy = false;
      }, 300);
    });

    image.addEventListener("error", err => {
      if (this.error) {
        this.activeImage = this.error;
      } else if (this.defaultImage) {
        this.activeImage = this.defaultImage;
      }

      this._busy = false;
      console.log(err);
    });

    fetch(this.prefix + this.src + this.suffix, {
      headers: { Authorization: `Bearer ${this._shared.get("access_token")}` }
    })
      .then(function(response) {
        return response.blob();
      })
      .then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        image.src = objectURL;
      });
  }

  ngOnInit(): void {
    if (Boolean(this.acceptDrop)) {
      this.initDrop();
    }

    if (!this._src && this.defaultImage) {
      this.activeImage = this.defaultImage;
    }
  }

  private headers() {
    let headers;
    if (this._shared.get("access_token")) {
      headers = new HttpHeaders().set(
        "Authorization",
        "Bearer " + this._shared.get("access_token")
      );
    }
    return headers;
  }
}
