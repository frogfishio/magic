import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgChartComponent } from './chart.component';

describe('MgChartComponent', () => {
  let component: MgChartComponent;
  let fixture: ComponentFixture<MgChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
