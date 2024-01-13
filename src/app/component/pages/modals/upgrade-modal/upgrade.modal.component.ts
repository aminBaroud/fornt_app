import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-upgrade-model',
  templateUrl: './upgrade.modal.component.html',
  styleUrl: './upgrade.modal.component.scss'
})
export class UpgradeModalComponent {
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
