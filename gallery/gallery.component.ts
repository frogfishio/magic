import { Component, Input, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MgImageComponent } from '../image/image.component';

@Component({
  selector: 'mg-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class MgGalleryComponent implements OnInit {
  @Input('ngModel') images;
  @Input() prefix: string;
  @Input() suffix: string;

  @Input() upload; // upload service URL
  @Input() meta; // meta data to push with upload
  @Input() token; // OAuth bearer token
  @Input() acceptDrop;

  @Input() onLoaded;
  @Input() onError;
  @Input() onUploaded; // deprecates see onUpdate
  @Input() onUpdated;

  @Input() onSelect;
  @Input() onClick;

  // @ViewChildren(MgImageComponent, { read: ElementRef }) imageComponents: QueryList<MgImageComponent>;
  @ViewChildren(MgImageComponent) imageComponents: QueryList<MgImageComponent>;

  private _busy = false;
  private _state;
  private _last_state;
  private _selected = [];

  get state() {
    return this._state;
  }

  constructor(private elementRef: ElementRef) {}

  // drop(ev) {
  //   console.log(`Dropped: ${ev}`);
  // }

  // allowDrop(ev) {
  //   console.log(`allow: ${ev}`);
  // }

  drag(ev) {
    console.log(`Start -> ${ev}`);
    ev.dataTransfer.setData('text', 'jdiusajdiasdiajsdisajdisjaidasjdijaidjia');
  }

  remove = image => {
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
  };

  select = image => {
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

  click = image => {
    if (this.onClick) {
      return this.onClick(image.src);
    }
  };

  ngOnInit(): void {
    if (this.acceptDrop === true || this.acceptDrop === 'true') {
      this.initDrop();
    }
  }

  imageUploadCallback = params => {
    console.log(`Gallery image uplaoded ${params}`);
    if (this.onUpdated) {
      return this.onUpdated(this.getImageArray());
    }
  };

  private getImageArray(arr?: Array<any>) {
    const res = [];
    arr = arr || this.imageComponents.toArray();
    console.log(`Image components: ${arr.length}`);
    for (const image of arr) {
      res.push(image.src);
    }
    return res;
  }

  private move(destination, id) {
    // console.log(`Moving ${id}`);
    const images = this.imageComponents.toArray();
    const destIdx = images.indexOf(this.targetToComponent(destination));
    const srcIdx = images.indexOf(this.srcToComponent(id));
    this.images.splice(destIdx, 0, this.images.splice(srcIdx, 1)[0]);
    images.splice(destIdx, 0, images.splice(srcIdx, 1)[0]);
    if (this.onUpdated) {
      return this.onUpdated(this.getImageArray(images));
    }
  }

  private targetToComponent(target) {
    const imgComp = this.imageComponents.toArray();
    for (const img of imgComp) {
      if (img.isDropTarget(target)) {
        return img;
      }
    }
  }

  private srcToComponent(src: string) {
    const imgComp = this.imageComponents.toArray();
    for (const component of imgComp) {
      if (component.src === src) {
        return component;
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
    container.ondragover = ev => {
      ev.preventDefault();
    };
    container.ondragleave = () => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = null;
        // console.log('leave');
      }
    };
    container.ondrop = ev => {
      if (!this._busy) {
        this._state = this._last_state;
        this._last_state = null;
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
    container.ondragstart = ev => {
      const component = this.targetToComponent(ev.target.querySelector('div'));
      if (component) {
        ev.dataTransfer.setData('text', component.src);
      }
    };
  }
}
