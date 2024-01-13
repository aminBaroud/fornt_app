import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../../app-routing.module';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm.delete.modal.component';
import { DeleteReferenceModalComponent } from './delete-modal/delete.reference.reference.modal.component';
import { DisplayReferenceModalComponent } from './display-modal/display.reference.modal.component';
import { NewReferenceModalComponent } from './new-reference-modal/new.reference.modal.component';
import { ReferenceSentModalComponent } from './references-sent/reference.sent.modal.component';
import { RequestModalComponent } from './request-modal/request.modal.component';
import { ConfirmSentModalComponent } from './sent-modal/sent.modal.component';
import { ShareModalComponent } from './share-modal/share.modal.component';
import { UpgradeModalComponent } from './upgrade-modal/upgrade.modal.component';
import { ViewReferenceModalComponent } from './view-reference/view.reference.modal.component';
import { SquareComponent } from '../reference/start/square/square.component';
import { StarComponent } from '../reference/start/star/star.component';


@NgModule({
  declarations: [
    ViewReferenceModalComponent,
    UpgradeModalComponent,
    ShareModalComponent,
    ConfirmSentModalComponent,
    RequestModalComponent,
    ReferenceSentModalComponent,
    NewReferenceModalComponent,
    DisplayReferenceModalComponent,
    DeleteReferenceModalComponent,
    ConfirmDeleteModalComponent,
    StarComponent,
    SquareComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    StarComponent,
    SquareComponent,
    ViewReferenceModalComponent,
    UpgradeModalComponent,
    ShareModalComponent,
    ConfirmSentModalComponent,
    RequestModalComponent,
    ReferenceSentModalComponent,
    NewReferenceModalComponent,
    DisplayReferenceModalComponent,
    DeleteReferenceModalComponent,
    ConfirmDeleteModalComponent]
})
export class CustomModalsModule { }
