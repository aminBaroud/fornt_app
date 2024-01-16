import { Component, ViewChild } from '@angular/core';
import { NewReferenceModelComponent } from '../models/new-reference-model/new.reference.model.component';

@Component({
  selector: 'app-company-check',
  templateUrl: './company.check.component.html',
  styleUrl: './company.check.component.scss',
})
export class CompanyCheckComponent {
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

  @ViewChild(NewReferenceModelComponent) NewReferenceModalComponent: any;
  openPopup() {
    this.NewReferenceModalComponent.openPopup();
  }
  constructor() {
    localStorage.setItem('showLogin', 'false');
  }

  public decline() {
    console.log('Data -- decline');
  }
  public complete(value: any) {
    console.log('Data -- complete');
  }
}
