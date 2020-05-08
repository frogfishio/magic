import { Component, OnInit, Input } from '@angular/core';
import { MgSideNavComponent } from './sidenav.component';

@Component({
  selector: 'mg-sidenav-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class MgSideNavNavigatorComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  watch: Array<string>;

  private _active = false;

  constructor(private sidenav: MgSideNavComponent) {}

  ngOnInit(): void {
    // this.tabBar.register(this);
  }

  get style() {
    switch (this.sidenav.mode) {
      case 'collapsed':
        return 'mg-sidenav-navigator-collapsed';
      case 'expanded':
        return 'mg-sidenav-navigator-expanded';
      default:
        return 'mg-sidenav-navigator-default';
    }
  }

  get active() {
    return this._active;
  }

  set active(value) {
    // console.log('ACT: ' + this.tabBar.value);
    // if (this.watch && this.watch.length > 0) {
    //   if (this.tabBar.value && this.watch.indexOf(this.tabBar.value) > -1) {
    //     this._active = value;
    //   }
    // } else {
    //
    // }
    this._active = value;
  }
}
