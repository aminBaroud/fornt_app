import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-welcome',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {


  constructor(){
    localStorage.setItem('showLogin','false');
  }

  public decline(){
    console.log("Data -- decline");
  }
  public complete(value:any){
    console.log("Data -- complete");

  }


}
