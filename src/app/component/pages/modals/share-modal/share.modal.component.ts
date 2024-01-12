import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-share-model',
  templateUrl: './share.modal.component.html',
  styleUrl: './share.modal.component.scss'
})
export class ShareModalComponent {
  displayStyle: string = "none";
  constructor(){
    this.displayStyle= "none";
  }

  public openPopup(value:any) {
    this.displayStyle = "block";
  }
  public closePopup() {
    this.displayStyle = "none";
  }

  public submit(){
    console.log('i clicked here ');
  }

}
