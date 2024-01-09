import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-check',
  templateUrl: './company.check.component.html',
  styleUrl: './company.check.component.scss'
})
export class CompanyCheckComponent {
  list = [
    { text:"" },
    { text:"" },
    { text:"" },
    { text:"" },
    { text:"" },
    { text:"" },
    { text:"" },
    { text:"" },

  ];


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
