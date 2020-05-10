import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgLoaderComponent } from './loader.component';

const components = [MgLoaderComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class MgLoaderModule {}
