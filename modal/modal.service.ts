import { ApplicationRef, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Injectable({ providedIn: 'root' })
export class MgModalService {
  private _viewContainerRef?: ViewContainerRef;
  private _active?: any;

  private _onClose?: () => any;

  constructor(private appRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  // IMPORTANT
  // APP COMPONENT MUST HAVE
  // constructor(public viewContainerRef: ViewContainerRef)

  create(component: any, data?: any, onClose?: () => any) {
    this._onClose = onClose;

    let cf = this.componentFactoryResolver.resolveComponentFactory(component);
    this._viewContainerRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;
    // this.viewContainerRef.clear();
    this.destroy();
    this._active = this.viewContainerRef.createComponent(cf);

    if (data) {
      for (const name of Object.getOwnPropertyNames(data)) {
        this._active.instance[name] = data[name];
      }
    }
  }

  destroy() {
    // let cf = this.componentFactoryResolver.resolveComponentFactory(component);
    // this._viewContainerRef = (this.appRef.components[0].instance as AppComponent).viewContainerRef;

    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
    this._active = undefined;
    if(this._onClose) {
      this._onClose();
    }
  }

  private get viewContainerRef() {
    return (
      this._viewContainerRef ||
      (this._viewContainerRef = (this.appRef.components[0].instance).viewContainerRef)
    );
  }
}
