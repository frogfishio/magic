import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgRenderAnyComponent } from './render-any.component';

const components = [MgRenderAnyComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class MgRenderAnyModule {}
