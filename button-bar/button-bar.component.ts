import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import { MgButtonBarButtonComponent } from "./button-bar-button.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../common/value-accessor-base";

@Component({
  selector: "mg-button-bar",
  templateUrl: "./button-bar.component.html",
  styleUrls: ["./button-bar.component.styl"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MgButtonBarComponent,
      multi: true
    }
  ]
})
export class MgButtonBarComponent extends ValueAccessorBase<string> {
  @Input("ngModel") value;

  constructor() {
    super();
  }

  isActive(value: string): boolean {
    return this.value === value;
  }

  activate(value: string) {
    this.value = value;
    console.log(`Activated ${value}`);
  }
}
