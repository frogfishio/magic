import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'mg-render-any',
  templateUrl: './render-any.component.html',
  styleUrls: ['./render-any.component.styl'],
})
export class MgRenderAnyComponent implements OnInit {
  @Input() permissions: Array<string>;

  constructor(private _auth: AuthService) {}

  get render() {
    const val = this._auth.isLoggedInWithPermission(this.permissions);
    return val;
  }

  ngOnInit() {}
}
