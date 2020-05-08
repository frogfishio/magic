import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

const components = [MgButtonComponent];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: components,
  exports: components
})
export class MgButtonModule { }
