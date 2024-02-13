import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  number:any[];
  selected_stars:boolean =false;
  selected_value:number = 0;
constructor(){
  this.number=[];
}
  @Input()
  numberStarts!: number;

  @Output() selectedValue:EventEmitter<string>= new EventEmitter();


intiate(){
  if(this.numberStarts==null){
    this.number=[
      {id:1 , selected:""},
      {id:2 , selected:""},
      {id:3 , selected:""},
      {id:4 , selected:""},
      {id:5 , selected:""}
    ];
  }
  else{
    for(let i=1;i<=this.numberStarts;i++){
      this.number.push({
        id:i,selected:""
      });
    }
  }
}
ngOnInit() {
  this.intiate();
  }

selected(item:any){
  this.selected_stars = true;
  this.selected_value = item;

    this.number.forEach((value)=>{
      if(value.id<=item){
        return value.selected="selected";
      }
      return value.selected="";
    });

  this.selectedValue.emit(item);
}

mouseOver(item:any){


    this.number.forEach((value)=>{
      if(value.id<=item){
        return value.selected="selected";
      }
      return value.selected="";
    });


}

mouseOut(){

    this.number.forEach((value)=>{
      if(value.id<=this.selected_value){
        return value.selected="selected";
      }
      return value.selected="";
    });

}
}

