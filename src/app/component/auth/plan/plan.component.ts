import { Component } from '@angular/core';
import { MdbModalRef , MdbModalService  } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
  public submit(){
    console.log('i clicked here ');
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }

}
