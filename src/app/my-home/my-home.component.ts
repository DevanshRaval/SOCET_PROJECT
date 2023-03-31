import { Component } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {
  showModal : boolean =false;
  todayTime : Date = new Date();
  c : number = 0;  
  currentTimeOut : any = 0;
  constructor(){
    setInterval(()=>{
       let currentTime = new Date();
       this.currentTimeOut = currentTime;
    },1000)
  }
}
