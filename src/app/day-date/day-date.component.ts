import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theDay',
  templateUrl: './day-date.component.html',
  styleUrls: ['./day-date.component.css']
})
export class DayDateComponent implements OnInit {
  private day : Date;
  constructor() { 
    this.day = new Date;

  }

  ngOnInit() {
  }

}
