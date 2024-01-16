import { Component } from '@angular/core';
@Component({
  selector: 'app-display-reference-model',
  templateUrl: './display.reference.model.component.html',
  styleUrl: './display.reference.model.component.scss',
})
export class DisplayReferenceModelComponent {
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
