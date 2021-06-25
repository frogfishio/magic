import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MgModalComponent } from './modal.component';

describe('MgModalComponent', () => {
  let component: MgModalComponent;
  let fixture: ComponentFixture<MgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MgModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
