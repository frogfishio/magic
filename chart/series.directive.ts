import { Directive, Input, OnInit } from '@angular/core';
import { MgChartComponent } from './chart.component';

declare var Chart: any;

@Directive({
  selector: 'mg-series'
})
export class MgChartSeriesDirective implements OnInit {
  @Input()
  data: Array<number>;

  @Input()
  borderColor: Array<string> | string;

  @Input()
  borderWidth: number;

  @Input()
  backgroundColor: Array<string>

  constructor(private chart: MgChartComponent) {}

  ngOnInit(): void {
    this.chart.register(this);
  }
}
