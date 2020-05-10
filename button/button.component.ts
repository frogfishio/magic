import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl'],
})
export class MgButtonComponent {
  @Input()
  navigate: string;
  @Input()
  action;

  @Input() set class(value: string) {
    this._class = value;
  }

  get class() {
    return this._class || 'default';
  }

  private _class = 'default';

  processing;

  constructor(private router: Router) {}

  buttonClicked() {
    if (this.navigate) {
      this.router.navigateByUrl(this.navigate);
    } else if (this.action) {
      this.processing = true;
      const promise = this.action();
      if (!promise || !(promise instanceof Promise)) {
        this.processing = false;
      } else {
        promise
          .then(() => {
            this.processing = false;
          })
          .catch((err) => {
            this.processing = false;
            console.log(err);
          });
      }
    }
  }
}
