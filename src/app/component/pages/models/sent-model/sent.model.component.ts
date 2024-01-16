import { Component } from '@angular/core';
@Component({
  selector: 'app-confirm-sent-model',
  templateUrl: './sent.model.component.html',
  styleUrl: './sent.model.component.scss',
})
export class ConfirmSentModelComponent {
  displayStyle: string = 'none';
  constructor() {
    this.displayStyle = 'none';
  }

  public openPopup(value: any) {
    this.displayStyle = 'block';
  }
  public closePopup() {
    this.displayStyle = 'none';
  }

  public submit() {
    console.log('i clicked here ');
  }
}
