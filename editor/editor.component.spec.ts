import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgEditorComponent } from './editor.component';

describe('MgEditorComponent', () => {
  let component: MgEditorComponent;
  let fixture: ComponentFixture<MgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
