import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSearchboxComponent } from './searchbox.component';
import { MatButtonModule } from '@angular/material/button';

const components = [MgSearchboxComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: components,
  exports: components,
})
export class MgSearchboxModule {}
