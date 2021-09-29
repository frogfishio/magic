import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MgNavbarComponent } from './navbar.component';
import { MgNavbarNavComponent } from './nav.component';

const components = [MgNavbarComponent, MgNavbarNavComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: components,
  exports: components,
})
export class MgNavbarModule { }
