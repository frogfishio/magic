import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSideNavNavigatorComponent } from './navigator.component';

describe('LoginComponent', () => {
  let component: MgSideNavNavigatorComponent;
  let fixture: ComponentFixture<MgSideNavNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgSideNavNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSideNavNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
