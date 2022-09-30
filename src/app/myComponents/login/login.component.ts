import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Username:string="";
Password:string="";
errorMsg:string=""
  constructor(private auth:AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }
 
  login():void{
    if(this.Username.trim().length===0){
      this.errorMsg="* Username is required";
    }
    else if(this.Password.trim().length===0){
      this.errorMsg="* Password is required";

    }
    else {
     
      let response= this.auth.login(this.Username,this.Password);
      if(response==200)
      {
        this.errorMsg="";
        this.router.navigate(['/home']);
      }
      else if(response==403){
        this.errorMsg="* Invalid Credentials";
        
      }
    }
  }

}

