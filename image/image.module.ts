import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSpinnerModule } from '../spinner/spinner.module';
import { MgImageComponent } from './image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MgLoaderModule } from '../loader/loader.module';

const components = [MgImageComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MgSpinnerModule, MgLoaderModule],
  exports: components,
})
export class MgImageModule {}
