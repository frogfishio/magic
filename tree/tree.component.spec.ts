import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgTreeComponent } from './tree.component';

describe('MgTreeComponent', () => {
  let component: MgTreeComponent;
  let fixture: ComponentFixture<MgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
