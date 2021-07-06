import { Component, Input, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MgImageComponent } from '../image/image.component';

@Component({
  selector: 'mg-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class MgGalleryComponent implements OnInit {
  @Input('ngModel') images: any;
  @Input() prefix?: string;
  @Input() suffix?: string;

  @Input() upload?: string; // upload service URL
  @Input() meta?: any; // meta data to push with upload
  @Input() token?: string; // OAuth bearer token
  @Input() acceptDrop: boolean | string = false;

  @Input() onLoaded?: any;
  @Input() onError?: any;
  @Input() onUploaded?: any; // deprecates see onUpdate
  @Input() onUpdated?: any;

  @Input() onSelect?: any;
  @Input() onClick?: any;

  // @ViewChildren(MgImageComponent, { read: ElementRef }) imageComponents: QueryList<MgImageComponent>;
  @ViewChildren(MgImageComponent) imageComponents?: QueryList<MgImageComponent>;

  private _busy = false;
  private _state?: string;
  private _last_state?: string;
  private _selected: Array<any> = [];

  get state() {
    return this._state;

  }

  constructor(private elementRef: ElementRef) { }

  // drop(ev) {
  //   console.log(`Dropped: ${ev}`);
  // }

  // allowDrop(ev) {
  //   console.log(`allow: ${ev}`);
  // }

  drag(ev: any) {
    console.log(`Start -> ${ev}`);
    ev.dataTransfer.setData('text', 'jdiusajdiasdiajsdisajdisjaidasjdijaidjia');
  }

  remove = (image: MgImageComponent) => {
    if (this.imageComponents) {
      let idx;
      const imgComp = this.imageComponents.toArray();

      if ((idx = imgComp.indexOf(image)) !== -1) {
        this.images.splice(idx, 1);
        imgComp.splice(idx, 1);
      }

      if ((idx = this._selected.indexOf(image)) !== -1) {
        this._selected.splice(idx, 1);
      }

      if (this.onUpdated) {
        return this.onUpdated(this.getImageArray(imgComp));
      }
    }
  };

  select = (image: any) => {
    const idx = this._selected.indexOf(image);
    if (idx === -1) {
      this._selected.push(image);
    } else {
      this._selected.splice(idx, 1);
    }

    if (this.onSelect) {
      return this.onSelect(this.getImageArray(this._selected));
    }
  };

  click = (image: any) => {
    if (this.onClick) {
      return this.onClick(image.src);
    }
  };

  ngOnInit(): void {
    if (this.acceptDrop === true || this.acceptDrop === 'true') {
      this.initDrop();
    }
  }

  imageUploadCallback = (params: any) => {
    console.log(`Gallery image uplaoded ${params}`);
    if (this.onUpdated) {
      return this.onUpdated(this.getImageArray());
    }
  };

  private getImageArray(arr?: Array<any>) {
    const res = [];
    if (this.imageComponents) {
      arr = arr || this.imageComponents.toArray();
      console.log(`Image components: ${arr.length}`);
      for (const image of arr) {
        res.push(image.src);
      }
    }

    return res;
  }

  private move(destination: any, id: string) {
    // console.log(`Moving ${id}`);
    if (this.imageComponents) {
      const images = this.imageComponents.toArray();
      const src = this.srcToComponent(id);
      const dest = this.targetToComponent(destination);

      if (src && dest) {
        const destIdx = images.indexOf(dest);
        const srcIdx = images.indexOf(src);
        this.images.splice(destIdx, 0, this.images.splice(srcIdx, 1)[0]);
        images.splice(destIdx, 0, images.splice(srcIdx, 1)[0]);
        if (this.onUpdated) {
          return this.onUpdated(this.getImageArray(images));
        }
      }
    }
  }

  private targetToComponent(target: any) {
    if (this.imageComponents) {
      const imgComp = this.imageComponents.toArray();
      for (const img of imgComp) {
        if (img.isDropTarget(target)) {
          return img;
        }
      }
    }
    return null;
  }

  private srcToComponent(src: string) {

    if (this.imageComponents) {
      const imgComp = this.imageComponents.toArray();
      for (const component of imgComp) {
        if (component.src === src) {
          return component;
        }
      }
    }

    return null;
  }

  private initDrop() {
    const container = this.elementRef.nativeElement.querySelector('div');
    container.ondragenter = () => {
      if (!this._busy) {
        if (!this._last_state) {
          this._last_state = this._state;
        }
        this._state = 'drag';
        // console.log('enter');
      }
    };
    container.ondragover = (ev: any) => {
      ev.preventDefault();
    };
    container.ondragleave = () => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = undefined;
        // console.log('leave');
      }
    };
    container.ondrop = (ev: any) => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = undefined;
        ev.preventDefault();

        if (ev.target !== container) {
          // console.log(`EV => ${JSON.stringify(ev.dataTransfer.getData('text'))} -tgt-> ${ev.target}`);
          this.move(ev.target, ev.dataTransfer.getData('text'));
        }

        for (const file of ev.dataTransfer.files) {
          console.log('DRO: ' + file.name);
          this.images.push(file);
        }
      }
    };
    container.ondragstart = (ev: any) => {
      const component = this.targetToComponent(ev.target.querySelector('div'));
      if (component) {
        ev.dataTransfer.setData('text', component.src);
      }
    };
  }
}
