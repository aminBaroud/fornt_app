import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Subject, debounceTime } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private scroller: ViewportScroller,){
    localStorage.setItem('showLogin','false');
  }
  GoTopBtn = false;

  scroll = new Subject<number>();
  ngOnInit() {
    this.scroll
      .pipe(debounceTime(200))
      .subscribe((y) => this.dealWithScroll(window.scrollY));
  }
  ngOnDestroy() {
    this.scroll.complete();
  }
  @HostListener('window:scroll') watchScroll() {
    this.scroll.next(window.scrollY);
  }
  dealWithScroll(y: number) {
    console.log("scroll Y :",y);
    if(y>100){
      this.GoTopBtn=true;
    }
    else{
      this.GoTopBtn=false;
    }

  }


  goUp(){
    this.scroller.scrollToPosition([0,0])
  }


}
