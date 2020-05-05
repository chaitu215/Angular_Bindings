import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularbindings';
  name="USA" 

  public buttonDisabled;
  public buttonEnabled;
  public Child;
  public hero;
  public switchCase;
  
  constructor(){
    this.buttonDisabled = true;
    this.buttonEnabled = false;
    this.hero = {id:"Raghu"}
    this.switchCase = "'case 1'"
  }

  switchEnable(){
    this.buttonDisabled = false;
    this.buttonEnabled = true;
    this.Child = "Ram"
    this.hero = {id:"Krishna"}
    this.switchCase="case 2"
  }

}
