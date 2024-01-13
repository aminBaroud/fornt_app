import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-reference-sent-model',
  templateUrl: './reference.sent.modal.component.html',
  styleUrl: './reference.sent.modal.component.scss'
})
export class ReferenceSentModalComponent {

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
