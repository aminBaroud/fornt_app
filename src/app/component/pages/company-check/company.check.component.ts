import { Component, ViewChild } from '@angular/core';

import { UpgradeModalComponent } from './modals/upgrade-modal/upgrade.modal.component';
import { ConfirmDeleteModalComponent } from './modals/confirm-delete-modal/confirm.delete.modal.component';
import { ConfirmSentModalComponent } from './modals/sent-modal/sent.modal.component';

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

  @ViewChild(ConfirmSentModalComponent) ConfirmSentModalComponent: any ;
  openPopup() {
    this.ConfirmSentModalComponent.openPopup();
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
