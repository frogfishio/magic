import { Component, Input, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'mg-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl'],
})
export class MgSideNavComponent implements OnInit, AfterContentInit {
  @Input()
  mode: string = 'default';

  // @ViewChildren(ChildDirective) viewChildren!: QueryList<ChildDirective>;

  // private _tabs: MgSideNavNavComponent[] = [];
  // value;

  ngOnInit(): void {}

  ngAfterContentInit() {
    // contentChild is set
  }

  // get tabs() {
  //   const rtabs = [];
  //   for (const tab of this._tabs) {
  //     if (tab.watch && tab.watch.length > 0) {
  //       if (tab.watch.indexOf(this.value) > -1) {
  //         rtabs.push(tab);
  //       }
  //     } else {
  //       rtabs.push(tab);
  //     }
  //   }

  //   return rtabs;
  // }

  // register(tab: MgSideNavNavComponent) {
  //   this._tabs.push(tab);
  //   if (this._tabs.length === 1) {
  //     tab.active = true;
  //   }
  // }

  // select(tab) {
  //   for (const t of this._tabs) {
  //     t.active = t === tab;
  //   }
  // }
}
