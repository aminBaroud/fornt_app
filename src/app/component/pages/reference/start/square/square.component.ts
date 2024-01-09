import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {

  selected_video ="";
  selected_audio="";
  selected_text="";
  displayed_text="Record a video";
  constructor(){
    localStorage.setItem('showLogin','false');
  }
  public select(val:any){
    if(val =="video"){
      this.selected_video ="selected_video";
      this.selected_audio="";
      this.selected_text="";
      this.displayed_text = "Record a video";
    }

    if(val =="audio"){
      this.selected_video ="";
      this.selected_audio="selected_audio";
      this.selected_text="";
      this.displayed_text = "record an audio";
    }
    if(val =="text"){
      this.selected_video ="";
      this.selected_audio="";
      this.selected_text="selected_text";
      this.displayed_text = "add";
    }


  }
  public decline(){
    console.log("Data -- decline");
  }
  public complete(value:any){
    console.log("Data -- complete");

  }


}
