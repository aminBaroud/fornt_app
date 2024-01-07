import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-talent-check',
  templateUrl: './talent.check.component.html',
  styleUrl: './talent.check.component.scss'
})
export class TalentCheckComponent {
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
