import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSearchboxComponent } from './searchbox.component';

describe('MgSearchboxComponent', () => {
  let component: MgSearchboxComponent;
  let fixture: ComponentFixture<MgSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
