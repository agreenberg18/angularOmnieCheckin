import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dateTime',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  private date:Date;

  constructor() { 
    this.date = new Date();
    setInterval(() =>{
      this.date = new Date();
    }, 100);
  }

  ngOnInit() {
  }

}
