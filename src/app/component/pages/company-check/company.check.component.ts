import { Component, ViewChild } from '@angular/core';
import { ViewReferenceModalComponent } from '../modals/view-reference/view.reference.modal.component';
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

  @ViewChild(ViewReferenceModalComponent) ViewReferenceModalComponent: any ;
  openPopup() {
    this.ViewReferenceModalComponent.openPopup();
  }
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
