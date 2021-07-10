import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSearchboxComponent } from './searchbox.component';

const components = [MgSearchboxComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class MgSearchboxModule {}
