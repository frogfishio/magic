import { Component, Input, Renderer2, ElementRef, OnInit } from '@angular/core';
import { MgChartSeriesDirective } from './series.directive';

declare var Chart: any;

@Component({
  selector: 'mg-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class MgChartComponent implements OnInit {
  @Input()
  set type(value: string) {
    this._data.type = value;
  }

  @Input()
  set labels(value: Array<string>) {
    this._data.data.labels = value;
    this.refresh();
  }

  private _chart;

  private _data: any = {
    data: {
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
      // animation: {
      //   duration: 0
      // },
      // hover: {
      //   animationDuration: 0
      // },
      // responsiveAnimationDuration: 0
    }
  };

  constructor(private elementRef: ElementRef) {}

  register(series: MgChartSeriesDirective) {
    const value = {
      borderColor: series.borderColor,
      backgroundColor: series.backgroundColor,
      data: series.data
    };
    this._data.data.datasets.push(value);
    this.refresh();
  }

  refresh() {
    if (this._chart) {
      this._chart.update();
    }
  }

  ngOnInit(): void {
    const container = this.elementRef.nativeElement.querySelector('canvas');
    console.log(`Element: ${container.outerHTML}`);
    const ctx = container.getContext('2d');
    this._chart = new Chart(ctx, this._data);
    // this.refresh();
  }
}
