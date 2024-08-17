import { Component, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  timeNow: string = "";
  routeName: string = "";
  showMainButton:boolean = false

  private intervalId: any;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.updateTime();
    this.subscribeToRouterEvents();
    this.syncWithSharedService();

    // Update the time every second
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }



  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  }



  private syncWithSharedService(): void {
    this.sharedService.routeNameChanged.subscribe(value => {
      this.routeName = value;
    })
    this.sharedService.welcomeButtonBooleanChanged.subscribe(value => {
      this.showMainButton = value;
    })

  }



  private updateTime(): void {
    this.timeNow = formatDate(new Date(), 'HH:mm dd.MM.YYYY', 'en');
  }



  private updateExitButtonValue(): void {
    // this.FirstPage = this.sharedService.FirstPage;
  }



  private subscribeToRouterEvents(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTime();
        this.updateExitButtonValue();
      });
  }



  navigateToFirstPage(): void {
    // window.close();
    this.sharedService.setRouteName("SpotiHi");
    this.router.navigate(['/']);
  }

}
