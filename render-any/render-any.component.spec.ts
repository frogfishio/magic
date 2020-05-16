import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgRenderAnyComponent } from './render-any.component';

describe('MgRenderAnyComponent', () => {
  let component: MgRenderAnyComponent;
  let fixture: ComponentFixture<MgRenderAnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgRenderAnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgRenderAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
