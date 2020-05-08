import { Component, OnInit, Input } from "@angular/core";
import { MgTreeComponent } from "./tree.component";

@Component({
  selector: "mg-tree-item",
  templateUrl: "./tree-item.component.html",
  styleUrls: ["./tree-item.component.styl"]
})
export class MgTreeItemComponent implements OnInit {
  private _level = -1;
  @Input() data;
  @Input() set level(value: number) {
    this._level = value === undefined ? 0 : value;
  }

  constructor(private _tree: MgTreeComponent) {}

  get level() {
    return this._level + 1;
  }

  get levels() {
    return new Array<string>(this.level);
  }

  toggle(data) {
    data.expanded = !data.expanded;
    if (data.expanded) {
      this._tree.expandEvent(data);
    }
  }

  activate(data) {
    this._tree.activate(data);
  }

  context(event, data) {
    this._tree.activate(data);
    return this._tree.contextEvent(event.clientX, event.clientY, data);
  }

  event(evt, data) {
    console.log("===================================");
    console.log(evt);
    if (evt.which === 3) {
      evt.preventDefault();
      evt.stopPropagation();
      console.log("Right click !!! " + JSON.stringify(data));
    }
  }

  isActive(id: string) {
    return this._tree.isActive(id);
  }

  ngOnInit() {}
}
