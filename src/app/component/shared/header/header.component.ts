import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../_services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentRoute: string | undefined;
  isVisible = false;
  activatedRoute: any;
  currentUrl: any;
  isConnected = false;
  navbarOpen = false;
  username="Kevin";
  token:any =  localStorage.getItem("access_token") && localStorage.getItem("access_token")!=null ? localStorage.getItem("access_token") :'';
  user:any = localStorage.getItem("user") && localStorage.getItem("user")!=null ? localStorage.getItem("user") :'';
  navigationItems = [
    { text: 'About us', href: '/aboutUs', selected: '' },
    { text: 'Why Talent Check', href: '/aboutUs#WhyTalent', selected: '' },
    { text: 'How it works', href: '/aboutUs#HowItWorks', selected: '' },
    { text: 'Trusted by', href: '/aboutUs#TrustedBy', selected: '' },
    { text: 'Plans', href: '/aboutUs#Plans', selected: '' },
    { text: 'Resources', href: '/aboutUs#Ressources', selected: '' },
    { text: 'Contact us', href: '/aboutUs#ContactUs', selected: '' },
  ];




  constructor(private router: Router,
    private AuthService: AuthService,
    ) {
    if(this.token==''){
      this.isConnected =true;
      this.username = this.user?.first_name;
      this.navigationItems = [
        { text: 'Profile', href: '/profile', selected: '' },
        { text: 'Your talent checks', href: '/start', selected: '' },
        { text: 'Ressources', href: '/ressources', selected: '' },
        { text: 'Contact us', href: '/contact-us', selected: '' },
      ];
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.navigationItems.map((item) => {
          if (item.href == this.currentUrl) {
            item.selected = 'selected';
          } else {
            item.selected = '';
          }
        });
        console.log('Current route', this.currentUrl);
      }
    });

    let display = localStorage.getItem('showLogin');
    if (display != null) {
      this.isVisible = display != 'true';
    }
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(){
    this.AuthService.logout();
  }
}
