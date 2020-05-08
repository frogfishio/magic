import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MgSideNavComponent } from './sidenav.component';
import { MgSideNavNavComponent } from './navigator-nav.component';
import { MgSideNavContainerComponent } from './container.component';
import { MgSideNavNavigatorComponent } from './navigator.component';

const components = [
  MgSideNavComponent,
  MgSideNavNavComponent,
  MgSideNavContainerComponent,
  MgSideNavNavigatorComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: components,
  exports: components
})
export class MgSidenavModule {}
