import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mg-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.styl"]
})
export class MgTreeComponent implements OnInit {
  @Input() data;
  @Input() set activate(value) {
    this._activate = value;
  }
  @Output() expand: EventEmitter<any> = new EventEmitter();
  @Output() context: EventEmitter<any> = new EventEmitter();

  private _activate;
  private _active;

  get activate() {
    return async data => {
      this._active = data.id;
      this._activate(data);
    };
  }

  contextEvent(x: number, y: number, data: any) {
    this.context.emit({ x: x, y: y, data: data });
    return false;
  }

  expandEvent(data: any) {
    this.expand.emit(data);
  }

  constructor() {}

  isActive(id) {
    return id === this._active;
  }

  ngOnInit() {}
}
