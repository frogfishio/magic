import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSpinnerModule } from '../spinner/spinner.module';
import { MgImageComponent } from './image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [MgImageComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MgSpinnerModule],
  exports: components
})
export class MgImageModule {}
