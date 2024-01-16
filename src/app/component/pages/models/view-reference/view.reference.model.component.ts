import { Component } from '@angular/core';
@Component({
  selector: 'app-view-reference-model',
  templateUrl: './view.reference.model.component.html',
  styleUrl: './view.reference.model.component.scss',
})
export class ViewReferenceModelComponent {
  constructor() {
    this.displayStyle = 'none';
  }
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

  selected_video = '';
  selected_audio = '';
  selected_text = '';
  displayed_text = 'Record a video';

  public select(val: any) {
    if (val == 'video') {
      this.selected_video = 'selected_video';
      this.selected_audio = '';
      this.selected_text = '';
      this.displayed_text = 'Record a video';
    }

    if (val == 'audio') {
      this.selected_video = '';
      this.selected_audio = 'selected_audio';
      this.selected_text = '';
      this.displayed_text = 'record an audio';
    }
    if (val == 'text') {
      this.selected_video = '';
      this.selected_audio = '';
      this.selected_text = 'selected_text';
      this.displayed_text = 'add';
    }
  }
  public decline() {
    console.log('Data -- decline');
  }
  public complete(value: any) {
    console.log('Data -- complete');
  }
  SetStarValue(section: any, data: any) {
    console.log(section, data);
  }

  displayStyle: string = 'none';

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
