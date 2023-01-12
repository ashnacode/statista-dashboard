import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspect-right',
  templateUrl: './aspect-right.component.html',
  styleUrls: ['./aspect-right.component.css']
})
export class AspectRightComponent implements OnInit {

  constructor() { }
  public aspectBoxes:any = [
    {
      'title':'Quality',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-up',
      'backg':''
    },
    {
      'title':'Safety',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-up',
      'backg':''
    },
    {
      'title':'Quality',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-up',
      'backg':''
    },
    {
      'title':'Quality',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-down',
      'backg':'2'
    },
    {
      'title':'Quality',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-down',
      'backg':'2'
    },
    {
      'title':'Quality',
      'subTitle':'Score out of 100',
      'percentage':'90%',
      'icon':'fa fa-arrow-up',
      'backg':''
    }
  ]; 
  ngOnInit(): void {
  }

}
