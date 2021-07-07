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
  ],
})
export class MgInputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() set value(val: any) {
    console.log(`set -> ${val}`);
    this._value = val;
    this.onChange(val);
  }

  get value() {
    return this._value;
  }

  @Input() onValue?: string;
  @Input() offValue?: string;

  private _value?: any;

  onChange: any = () => { };
  onTouch: any = () => { };

  constructor() { }

  toggle() {
    console.log(`VAL = [${this.value}]`);
    if (this.value === this.onValue) {
      this.value = this.offValue;
    } else {
      this.value = this.onValue;
    }
  }

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
}
