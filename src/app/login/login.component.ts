import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showValue : boolean = false;
  constructor(private route : Router){}
  goToHome(data: any){
  if(data.name==="UserName" && data.password === "12345"){
    this.route.navigate(['../home/my-home/nav-organization']);
  }
  else{
    this.showValue = false;
    setTimeout(() => {
      this.showValue = true;

    }, 100);
  }
    
  }
}
