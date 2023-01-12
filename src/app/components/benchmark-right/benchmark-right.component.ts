import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark-right',
  templateUrl: './benchmark-right.component.html',
  styleUrls: ['./benchmark-right.component.scss']
})
export class BenchmarkRightComponent implements OnInit {

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
          'percentage':'94',
          'eachStars':'5/5',
          'eachReviews':'4135',
          'mwidth':'94%'
          },
          {
            'percentage':'60',
            'eachStars':'4/5',
            'eachReviews':'636',
            'mwidth':'60%'
          },
          {
            'percentage':'50',
            'eachStars':'3/5',
            'eachReviews':'453',
            'mwidth':'50%'
          },
          {
            'percentage':'20',
            'eachStars':'2/5',
            'eachReviews':'376',
            'mwidth':'20%'
          },
          {
            'percentage':'10',
            'eachStars':'1/5',
            'eachReviews':'290',
            'mwidth':'10%'
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
