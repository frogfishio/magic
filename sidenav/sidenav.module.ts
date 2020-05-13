import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MgSideNavComponent } from './sidenav.component';
import { MgSideNavNavComponent } from './nav.component';

const components = [MgSideNavComponent, MgSideNavNavComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: components,
  exports: components,
})
export class MgSidenavModule {}
