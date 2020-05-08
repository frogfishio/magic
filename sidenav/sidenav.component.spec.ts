import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSideNavComponent } from './sidenav.component';

describe('NavBarNavComponent', () => {
  let component: MgSideNavComponent;
  let fixture: ComponentFixture<MgSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
