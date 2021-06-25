import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MgSideNavComponent } from './sidenav.component';

@Component({
  selector: 'mg-sidenav-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class MgSideNavNavComponent implements OnInit {
  @Input() title = '';
  @Input() watch: Array<string> = [];
  @Input() image = '';
  @Input() icon = '';
  @Input() navigate = '';

  @Input() show: boolean = true;

  private _active = false;

  constructor(private _router: Router, private _sidenav: MgSideNavComponent) {
    _sidenav.register((route: string) => {
      console.log(`Setting ${route}`);
      if (route === this.navigate || this.navigate === '/' + route.split('/')[1]) {
        this._active = true;
      } else {
        this._active = false;
      }
    });
  }

  activate() {
    if (this.navigate) {
      this._router.navigateByUrl(this.navigate);
    }
  }

  ngOnInit(): void {
    // this.tabBar.register(this);
  }

  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;
  }
}
