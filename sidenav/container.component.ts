import {Component, OnInit, Input} from '@angular/core';
import {MgSideNavComponent} from './sidenav.component';

@Component({
  selector: 'mg-sidenav-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class MgSideNavContainerComponent implements OnInit {
  @Input() title: string;
  @Input() watch: Array<string>;

  private _active = false;

  constructor(private sidenav: MgSideNavComponent) {
  }

  ngOnInit(): void {
    // this.tabBar.register(this);
  }

  get active() {
    return this._active;
  }

  get style() {
    switch (this.sidenav.mode) {
      case 'collapsed':
        return 'mg-sidenav-container-collapsed';
      case 'expanded':
        return 'mg-sidenav-container-expanded';
      default:
        return 'mg-sidenav-container-default';
    }
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
