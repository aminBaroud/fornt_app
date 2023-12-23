import { Component } from '@angular/core';
@Component({
  selector: 'app-reference-model',
  templateUrl: './reference.modal.component.html',
  styleUrl: './reference.modal.component.scss'
})
export class ReferenceModalComponent {
  displayStyle: string = "none";
  data ={
    decline:
    {
      title:"Are you sure<br/> you want to decline this request?",
      text:"<span>«John Doe»</span> was hoping you can help them with objective feedback about their knowledge, skills, and abilities, by declining, the request will be deleted, and they will not receive a completion notification for this request, are you sure you want to decline?",
      image:"../../../../../../assets/img/reference/welcome/cancel.png",
      confirm:true
    },

    accept:
    {
      title:"Awesome!",
      text:"Your reference check is now saved and ready to be shared. Thank you so much for helping <span>«John Doe»</span> landing their dream job.",
      image:"../../../../../../assets/img/reference/welcome/accept.svg",
      confirm:false
    },

    remainder:
    {
      title:"Awesome!",
      text:"You have successfully sent a reminder to Referee! ",
      image:"../../../../../../assets/img/reference/welcome/reminder.svg",
      confirm:false
    },


  }
  title="";
  text="";
  image="";
  isConfirme=true;

  constructor(){
    this.displayStyle= "none";
  }

  public openPopup(value:any) {
    console.log(value);
    if(value ==1){
      this.title=this.data.accept.title;
      this.text=this.data.accept.text;
      this.image=this.data.accept.image;
      this.isConfirme=this.data.accept.confirm;
    }
    if(value ==2){
      this.title=this.data.decline.title;
      this.text=this.data.decline.text;
      this.image=this.data.decline.image;
      this.isConfirme=this.data.decline.confirm;
    }
    if(value ==3){
      this.title=this.data.remainder.title;
      this.text=this.data.remainder.text;
      this.image=this.data.remainder.image;
      this.isConfirme=this.data.remainder.confirm;
    }

    this.displayStyle = "block";
  }
  public closePopup() {
    this.displayStyle = "none";
  }

  public submit(){
    console.log('i clicked here ');
  }

}
