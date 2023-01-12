/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.scss']
})
export class ChartRadarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.scss']
})
export class ChartRadarComponent {
  // Radar
  public demoradarChartLabels:string[] = ['Designer', 'Developer', 'Tester', 'Clients', 'HR'];
 
  public demoradarChartData:any = [
    {data: [20, 40, 15, 30, 12], label: 'Company A'},
    {data: [30, 40, 20, 35, 15], label: 'Company B'}
  ];
  public radarChartType:string = 'radar';
 
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}