import { Component, ViewChild } from '@angular/core';
import { RequestModelComponent } from '../models/request-model/request.model.component';
import { NewReferenceModelComponent } from '../models/new-reference-model/new.reference.model.component';
import { DeleteReferenceModelComponent } from '../models/delete-model/delete.reference.reference.model.component';

@Component({
  selector: 'app-talent-check',
  templateUrl: './talent.check.component.html',
  styleUrl: './talent.check.component.scss'
})
export class TalentCheckComponent {
  @ViewChild(RequestModelComponent) requestModelComponent: any ;
  @ViewChild(DeleteReferenceModelComponent) deleteReferenceModelComponent: any ;
  @ViewChild(NewReferenceModelComponent) newReferenceModelComponent: any ;

  list = [
    { text:"" , action:'confirm' },
    { text:"" , action:'delete' },
    { text:"" , action:'confirm' },
    { text:"" , action:'confirm' },
    { text:"" , action:'confirm' },
    { text:"" , action:'confirm' },
    { text:"" , action:'confirm' },
    { text:"" , action:'confirm' },

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
  public OpenConfirmation(item:any){
    if(item.action =='confirm'){
      this.requestModelComponent.openPopup();
    }
    else{
      this.deleteReferenceModelComponent.openPopup();
    }


  }
  public openNewReference(){
    this.newReferenceModelComponent.openPopup();
  }


}
