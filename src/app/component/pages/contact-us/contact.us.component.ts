import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.us.component.html',
  styleUrl: './contact.us.component.scss'
})
export class ContactUsComponent {


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
