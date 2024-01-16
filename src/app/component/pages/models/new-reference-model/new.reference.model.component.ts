import { Component } from '@angular/core';
@Component({
  selector: 'app-new-reference-model',
  templateUrl: './new.reference.model.component.html',
  styleUrl: './new.reference.model.component.scss',
})
export class NewReferenceModelComponent {
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
