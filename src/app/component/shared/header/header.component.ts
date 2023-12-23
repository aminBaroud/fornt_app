import { Component } from "@angular/core";
import { Router,NavigationEnd  } from '@angular/router';
import { filter, map } from "rxjs";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  currentRoute: string | undefined;
  isVisible = false;
  activatedRoute: any;
  currentUrl: any;
  isConnected =false;
  navigationItems = [
    { text: "About us", href: "/aboutUs" , selected:"" },
    { text: "Why Talent Check", href: "/whyTalentCheck", selected:"" },
    { text: "How it works", href: "/howItWorks", selected:"" },
    { text: "Trusted by", href: "/trustedBy" , selected:""},
    { text: "Plans", href: "/plans" , selected:""},
    { text: "Resources", href: "/resources", selected:"" },
    { text: "Contact us", href: "/contactUs" , selected:""},
  ];

  constructor(private router: Router){
    this.router.events
  .subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.currentUrl = event.url;
      this.navigationItems.map((item)=>{
        if(item.href == this.currentUrl){
          item.selected="selected";
        }
        else{
          item.selected="";
        }
      })
      console.log('Current route' , this.currentUrl);

    }
  })

    let display = localStorage.getItem('showLogin');
    if(display != null){
      this.isVisible = display !="true";
    }
  }

}
