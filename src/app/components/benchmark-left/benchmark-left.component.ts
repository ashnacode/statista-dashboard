import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark-left',
  templateUrl: './benchmark-left.component.html',
  styleUrls: ['./benchmark-left.component.scss']
})
export class BenchmarkLeftComponent implements OnInit {

  constructor() { }
  public reviewParentData;
  public chartParentData;
  public chartTitle = "Sentiment by Aspect"
  ngOnInit(): void {
    this.reviewParentData = 
      {
        'reviewTitle':'Total Reviews',
        'reviewSubTitle':'Total unfiltered reviews',
        'totalStars':'4.5/5',
        'totalReviews':'1601',
        'customeStyle':'',
        'reviewsList':[
          {
          'percentage':'84',
          'eachStars':'5/5',
          'eachReviews':'4135',
          'mwidth':'84%'
          },
          {
            'percentage':'10',
            'eachStars':'4/5',
            'eachReviews':'636',
            'mwidth':'10%'
          },
          {
            'percentage':'3',
            'eachStars':'3/5',
            'eachReviews':'453',
            'mwidth':'3%'
          },
          {
            'percentage':'2',
            'eachStars':'2/5',
            'eachReviews':'376',
            'mwidth':'2%'
          },
          {
            'percentage':'1',
            'eachStars':'1/5',
            'eachReviews':'290',
            'mwidth':'1%'
          }
        ]
      }
      // Chart config data
      this.chartParentData = 
        {
          'chartTitle':'Sentiment by Aspect',
          'chartSubTitle':'Total unfiltered reviews',
          'chartData':[20, 40, 15, 30, 12, 17],
          'chartLables':['Quality', 'Safety', 'Services', 'Cleaning', 'Food taste']
        }
    
  }

}
