import { Component, ViewChild } from '@angular/core';
import { NewReferenceModalComponent } from '../modals/new-reference-modal/new.reference.modal.component';

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

  @ViewChild(NewReferenceModalComponent) NewReferenceModalComponent: any ;
  openPopup() {
    this.NewReferenceModalComponent.openPopup();
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
