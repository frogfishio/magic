import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSearchboxComponent } from './searchbox.component';
import { MatButtonModule } from '@angular/material';

const components = [MgSearchboxComponent];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: components,
  exports: components
})
export class MgSearchboxModule { }
