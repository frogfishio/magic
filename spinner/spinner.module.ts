import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgSpinnerComponent } from './spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [MgSpinnerComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: components
})
export class MgSpinnerModule {}
