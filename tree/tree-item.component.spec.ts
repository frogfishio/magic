import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgTreeItemComponent } from './tree-item.component';

describe('MgTreeItemComponent', () => {
  let component: MgTreeItemComponent;
  let fixture: ComponentFixture<MgTreeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgTreeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
