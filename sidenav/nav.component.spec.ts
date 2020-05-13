import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSideNavNavComponent } from './navigator-nav.component';

describe('LoginComponent', () => {
  let component: MgSideNavNavComponent;
  let fixture: ComponentFixture<MgSideNavNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgSideNavNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSideNavNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
