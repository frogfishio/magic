import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mg-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.styl']
})
export class MgSearchboxComponent implements OnInit {
  @Input() action: () => Promise<any>;
  @Input() disabled: boolean;
  @Input() type: string;
  @Input() color: string;

  error = false;
  busy = false;

  constructor() {}

  async clicked() {
    if (!this.action) {
      return (this.error = true);
    }

    try {
      this.busy = true;
      this.disabled = true;
      await this.action();
      this.disabled = false;
      this.busy = false;
    } catch (err) {
      this.error = err;
      this.disabled = false;
      this.busy = false;
    }
  }

  ngOnInit() {}
}
