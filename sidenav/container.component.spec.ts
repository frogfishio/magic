import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSideNavContainerComponent } from './container.component';

describe('LoginComponent', () => {
  let component: MgSideNavContainerComponent;
  let fixture: ComponentFixture<MgSideNavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgSideNavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSideNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
