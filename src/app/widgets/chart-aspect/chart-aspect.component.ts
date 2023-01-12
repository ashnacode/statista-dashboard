import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-aspect',
  templateUrl: './chart-aspect.component.html',
  styleUrls: ['./chart-aspect.component.scss']
})
export class ChartAspectComponent implements OnInit {
  @Input() chartConfigData:any;
  constructor() {}

  public demoradarChartLabels:string[] = [];//['Quality', 'Safety', 'Services', 'Cleaning', 'Food taste'];
  // Radar
  public demoradarChartData:any = [
    {data: [50, 40, 40, 35, 65, 17], label: 'Total unfiltered reviews'},/*{data: [30, 40, 20, 35, 15, 17], label: 'Company B'}*/
  ];
  public radarChartType:any = 'radar';

  ngOnInit(): void {
    console.log('my chart data', this.chartConfigData) 
    this.demoradarChartLabels = this.chartConfigData.chartLables;
    this.demoradarChartData.data = this.chartConfigData.chartData;
    this.demoradarChartData.label = this.chartConfigData.chartSubTitle;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  
}
