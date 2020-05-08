import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgButtonBarComponent } from './button-bar.component';

describe('MgButtonBarComponent', () => {
  let component: MgButtonBarComponent;
  let fixture: ComponentFixture<MgButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
