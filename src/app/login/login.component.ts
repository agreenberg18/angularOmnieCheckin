import { Component,         
        trigger,
        state,
        style,
        transition,
        animate,
        keyframes,
        OnInit,
         } from '@angular/core';
import { DateTimeComponent } from '../date-time/date-time.component';
import { DateDateComponent } from '../date-date/date-date.component';
import { DayDateComponent } from '../day-date/day-date.component'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
      trigger('slidePanel',[
          state('slideIn', style({height : '0px', display: "none"})),
          state('slideOut', style({display: 'flex', height : '225px'})),
          transition('* => *', animate('400ms'))
      ])
      
  ]
})
export class LoginComponent implements OnInit {
  state: string = "slideIn";
  empId: string;
  password: string;



  constructor() {

   }

  slideToggle(){
    if (this.state == "slideIn"){
      this.state = "slideOut";
    }
    else{
        this.state = "slideIn";
    }
    console.log(this.state);
}

  login(empId, password){
    console.log(empId, password);
    
  }
  ngOnInit() {
  }

}
