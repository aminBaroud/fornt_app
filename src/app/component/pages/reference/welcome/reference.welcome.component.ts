import { Component, ViewChild } from '@angular/core';
import {ReferenceModalComponent} from './modal/reference.modal.component';
@Component({
  selector: 'app-reference-welcome',
  templateUrl: './reference.welcome.component.html',
  styleUrl: './reference.welcome.component.scss'
})
export class ReferenceWelcomeComponent {

  @ViewChild(ReferenceModalComponent) referenceModalComponent: any ;

  constructor(){
    localStorage.setItem('showLogin','false');
  }

  public decline(){
    console.log("Data -- decline");
  }
  public complete(value:any){
    console.log("Data -- complete");
    this.referenceModalComponent.openPopup(value);
  }


}
