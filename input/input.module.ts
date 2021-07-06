import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgInputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

const components = [MgInputComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // MatButtonModule
  ],
  declarations: components,
  exports: components,
})
export class MgInputModule {}
