import { NgModule } from '@angular/core';
import { MgModalComponent } from './modal.component';

const components = [MgModalComponent];
@NgModule({
  declarations: components,
  imports: [],
  exports: components,
})
export class MgModalModule {}
