import { Component } from '@angular/core';
@Component({
  selector: 'app-upgrade-model',
  templateUrl: './upgrade.model.component.html',
  styleUrl: './upgrade.model.component.scss',
})
export class UpgradeModelComponent {
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
