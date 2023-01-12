import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  @Input() reviewConfigData: any;

  ngOnInit(): void {
    console.log('Review data', this.reviewConfigData)
    
  }

}



