import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgButtonBarComponent } from './button-bar.component';
import { MgButtonBarButtonComponent } from './button-bar-button.component';

const components = [MgButtonBarComponent, MgButtonBarButtonComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class MgButtonBarModule {}
