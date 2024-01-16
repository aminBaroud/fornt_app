import { Component } from '@angular/core';
@Component({
  selector: 'app-reference-sent-model',
  templateUrl: './reference.sent.model.component.html',
  styleUrl: './reference.sent.model.component.scss',
})
export class ReferenceSentModelComponent {
  list = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

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
