import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent implements OnInit {
@Input() rate:any;
@Input() isReadOnly:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
