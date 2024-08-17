import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  private routeNameSubject = new BehaviorSubject<string>("");
  private welcomeButtonBooleanSubject = new BehaviorSubject<boolean>(false);
  
  
  routeNameChanged = this.routeNameSubject.asObservable();
  welcomeButtonBooleanChanged = this.welcomeButtonBooleanSubject.asObservable();

  constructor() { }

  get routeName():string{
    return this.routeNameSubject.value;
  }

  setRouteName(value:string):void{
    this.routeNameSubject.next(value);
  }

  get welcomeButtonBoolean():boolean{
    return this.welcomeButtonBooleanSubject.value;
  }

  setWelcomeButton(value:boolean):void{
    this.welcomeButtonBooleanSubject.next(value);
  }

}
