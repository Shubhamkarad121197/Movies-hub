import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:AuthentificationService) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.auth.logout()

  }

}
