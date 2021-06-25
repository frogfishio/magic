import { ApplicationRef, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MgModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _viewContainerRef?: ViewContainerRef;
  private _active?: any;

  constructor(private appRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  create(component: any) {
    let cf = this.componentFactoryResolver.resolveComponentFactory(component);
    // this._viewContainerRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;
    this.viewContainerRef.clear();
    this._active = this.viewContainerRef.createComponent(cf);
  }

  destroy() {
    // let cf = this.componentFactoryResolver.resolveComponentFactory(component);
    // this._viewContainerRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;
    this.viewContainerRef.clear();
    this._active = undefined;
  }

  private get viewContainerRef() {
    return (
      this._viewContainerRef ||
      (this._viewContainerRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef)
    );
  }
}
