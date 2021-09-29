import { Component, Input, OnInit, AfterContentInit, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'mg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class MgNavbarComponent implements OnInit {
  private _activeRoute = '';
  private _subscribers: Array<(route: string) => void> = [];

  private set activeRoute(route: string) {
    if (route) {
      this._activeRoute = route;
      for (const subscriber of this._subscribers) {
        subscriber(route);
      }
    }
  }

  private get activeRoute() {
    return this._activeRoute;
  }

  constructor(private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.indexOf('?') === -1) {
          this.activeRoute = val.url;
        } else {
          this.activeRoute = val.url.split('?')[0];
        }
      }
    });
  }

  ngOnInit(): void { }

  register(changeListener: (route: string) => void) {
    if (this._subscribers.indexOf(changeListener) === -1) {
      this._subscribers.push(changeListener);
    }
  }
}
