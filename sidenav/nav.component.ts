import { Component, OnInit, Input } from '@angular/core';
import { MgSideNavComponent } from './sidenav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-sidenav-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class MgSideNavNavComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  watch: Array<string>;

  @Input()
  image: string;
  @Input()
  icon: string;
  @Input()
  navigate: string;

  @Input()
  show: boolean = true;

  private _active = false;

  constructor(private sidenav: MgSideNavComponent, private router: Router) {}

  get style() {
    if (this.show !== true) {
      return 'mg-sidenav-navigator-collapsed';
    }
    switch (this.sidenav.mode) {
      case 'collapsed':
        return 'mg-sidenav-navigator-collapsed';
      case 'expanded':
        return 'mg-sidenav-navigator-expanded';
      default:
        return 'mg-sidenav-navigator-default';
    }
  }

  activate() {
    if (this.navigate) {
      this.router.navigateByUrl(this.navigate);
    }
  }

  ngOnInit(): void {
    // this.tabBar.register(this);
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
