import { Component } from '@angular/core';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

  displayStyle = "none";
  plan = "";
  openPopup(value:any) {
    console.log(value);
    this.plan = value;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  public submit(){
    console.log('i clicked here ');
  }
  openModal() {
    console.log('i clicked here ');
  }

}
