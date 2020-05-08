import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgGalleryComponent } from './gallery.component';
import { MgImageModule } from '../image/image.module';

const components = [MgGalleryComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, MgImageModule],
  exports: components
})
export class MgGalleryModule {}
