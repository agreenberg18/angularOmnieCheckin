import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dateDate',
  templateUrl: './date-date.component.html',
  styleUrls: ['./date-date.component.css']
})
export class DateDateComponent implements OnInit {
  private date: Date;
  constructor() { 
     this.date = new Date();
  }

  ngOnInit() {
  }

}
