import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  routeName:string = "SpotiHi";

  constructor(private router: Router, private sharedService: SharedService){

  }

  ngOnInit(): void {
    this.sharedService.setRouteName("SpotiHi");
    this.sharedService.setWelcomeButton(false);
  }

  onRegisterClick():void{
    this.sharedService.setRouteName("רישום לאתר");
    this.sharedService.setWelcomeButton(true);
    this.router.navigate(['user-registration']);
  }

  onHomeClick():void{
    this.sharedService.setRouteName("דף הבית");
    this.sharedService.setWelcomeButton(true);
    this.router.navigate(['home-page']);
  }
}
