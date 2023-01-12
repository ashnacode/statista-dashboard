import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspect-left',
  templateUrl: './aspect-left.component.html',
  styleUrls: ['./aspect-left.component.scss']
})
export class AspectLeftComponent implements OnInit {

  constructor() { }
  public reviewParentData:any;
  
  ngOnInit(): void {
    this.reviewParentData = 
      {
        'reviewTitle':'Reliable Reviews',
        'reviewSubTitle':'Total unfiltered reviews',
        'totalStars':'4.5/5',
        'totalReviews':'1601',
        'customClass':'yellow-color2',
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
  }

}
