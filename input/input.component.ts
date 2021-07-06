import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MgInputComponent,
    },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: ChooseQuantityComponent
    // }
  ],
})
export class MgInputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() set value(val: any) {
    this._value = val;
    this.onChange(val);
  }

  get value() {
    return this._value;
  }

  private _value?: any;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
    // this.onChange(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // ngOnInit(): void {}
}
