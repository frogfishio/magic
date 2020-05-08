import { Component, OnInit, Input } from "@angular/core";
import { MgButtonBarComponent } from "./button-bar.component";

@Component({
  selector: "mg-button-bar-button",
  templateUrl: "./button-bar-button.component.html",
  styleUrls: ["./button-bar-button.component.styl"]
})
export class MgButtonBarButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() value: string;
  @Input() toggle: boolean;
  @Input() set active(value: boolean) {
    if (value) {
      this.activate();
    }
  }

  get active(): boolean {
    return this._buttonBar.value === this.value;
  }

  constructor(private _buttonBar: MgButtonBarComponent) {}

  activate() {
    if (this.active) {
      return (this._buttonBar.value = "");
    }
    this._buttonBar.value = this.value;
  }

  ngOnInit() {}
}
