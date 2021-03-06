import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class MgLoaderComponent {
  private _ready = false;

  @Input() center: boolean = false;
  @Input() set ready(ready: any) {
    this._ready = !!ready;
  }

  get ready() {
    return this._ready;
  }

  constructor() {}
}
