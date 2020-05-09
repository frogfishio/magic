import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgTreeComponent } from './tree.component';
import { MatButtonModule } from '@angular/material/button';
import { MgTreeItemComponent } from './tree-item.component';

const components = [MgTreeComponent, MgTreeItemComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: components,
  exports: components,
})
export class MgTreeModule {}
