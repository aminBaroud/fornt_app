import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../../app-routing.module';
import { SquareComponent } from '../reference/start/square/square.component';
import { StarComponent } from '../reference/start/star/star.component';
import { ConfirmDeleteModelComponent } from './confirm-delete-model/confirm.delete.model.component';
import { DeleteReferenceModelComponent } from './delete-model/delete.reference.reference.model.component';
import { DisplayReferenceModelComponent } from './display-model/display.reference.model.component';
import { NewReferenceModelComponent } from './new-reference-model/new.reference.model.component';
import { ReferenceSentModelComponent } from './references-sent/reference.sent.model.component';
import { RequestModelComponent } from './request-model/request.model.component';
import { ConfirmSentModelComponent } from './sent-model/sent.model.component';
import { ShareModelComponent } from './share-model/share.model.component';
import { UpgradeModelComponent } from './upgrade-model/upgrade.model.component';
import { ViewReferenceModelComponent } from './view-reference/view.reference.model.component';

@NgModule({
  declarations: [
    ViewReferenceModelComponent,
    UpgradeModelComponent,
    ShareModelComponent,
    ConfirmSentModelComponent,
    RequestModelComponent,
    ReferenceSentModelComponent,
    NewReferenceModelComponent,
    DisplayReferenceModelComponent,
    DeleteReferenceModelComponent,
    ConfirmDeleteModelComponent,
    StarComponent,
    SquareComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    StarComponent,
    SquareComponent,
    ViewReferenceModelComponent,
    UpgradeModelComponent,
    ShareModelComponent,
    ConfirmSentModelComponent,
    RequestModelComponent,
    ReferenceSentModelComponent,
    NewReferenceModelComponent,
    DisplayReferenceModelComponent,
    DeleteReferenceModelComponent,
    ConfirmDeleteModelComponent,
  ],
})
export class CustomModalsModule {}
