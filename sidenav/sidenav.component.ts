import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MgSideNavNavComponent } from './navigator-nav.component';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mg-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class MgSideNavComponent implements OnInit {
  private _tabs: MgSideNavNavComponent[] = [];

  @Input()
  mode: string = 'default';

  value;
  
  ngOnInit(): void {}

  get tabs() {
    const rtabs = [];
    for (const tab of this._tabs) {
      if (tab.watch && tab.watch.length > 0) {
        if (tab.watch.indexOf(this.value) > -1) {
          rtabs.push(tab);
        }
      } else {
        rtabs.push(tab);
      }
    }

    return rtabs;
  }

  register(tab: MgSideNavNavComponent) {
    this._tabs.push(tab);
    if (this._tabs.length === 1) {
      tab.active = true;
    }
  }

  select(tab) {
    for (const t of this._tabs) {
      t.active = t === tab;
    }
  }
}
