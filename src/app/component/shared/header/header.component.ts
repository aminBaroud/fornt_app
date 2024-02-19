import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../_services/auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  _menuObservable: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  get menuObservable$(): Observable<any | null>
  {
      return this._menuObservable.asObservable();
  }

  currentRoute: string | undefined;
  isVisible = false;
  activatedRoute: any;
  currentUrl: any;
  isConnected = false;
  navbarOpen = false;
  navigation: any;
  token: any =
    localStorage.getItem('access_token') &&
    localStorage.getItem('access_token') != null
      ? localStorage.getItem('access_token')
      : '';
  user: any =
    localStorage.getItem('user') && localStorage.getItem('user') != null
      ? JSON.parse(localStorage.getItem('user') as string)
      : '';
  navigationItems = [
    { text: 'About us', href: '/aboutUs', selected: '' },
    { text: 'Why Talent Check', href: '/aboutUs#WhyTalent', selected: '' },
    { text: 'How it works', href: '/aboutUs#HowItWorks', selected: '' },
    { text: 'Trusted by', href: '/aboutUs#TrustedBy', selected: '' },
    { text: 'Plans', href: '/aboutUs#Plans', selected: '' },
    { text: 'Resources', href: '/aboutUs#Resources', selected: '' },
    { text: 'Contact us', href: '/aboutUs#ContactUs', selected: '' },
  ];


  constructor(private router: Router, private AuthService: AuthService) {


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

        // add this part to change menu when login
        this.token =
        localStorage.getItem('access_token') &&
        localStorage.getItem('access_token') != null
          ? localStorage.getItem('access_token')
          : '';
          if (this.token != '') {
            this.isConnected = true;

          }else{
            this.isConnected = false;
          }
          this._menuObservable.next(this.isConnected);
          this.user =localStorage.getItem('user') && localStorage.getItem('user') != null
          ? JSON.parse(localStorage.getItem('user') as string)
          : '';
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

  logout() {
    this.AuthService.logout();
  }

  ngOnInit() {
    this.menuObservable$.subscribe((data)=>{
      if (this.token != '') {
        this.isConnected=true;
        //console.log('username ===> ', this.first_name);
        this.navigationItems = [
          { text: 'Profile', href: '/profile', selected: '' },
          { text: 'Your talent checks', href: '/start', selected: '' },
          { text: 'Resources', href: '/resources', selected: '' },
          { text: 'Contact us', href: '/contact-us', selected: '' },
        ];
      } else {
        this.isConnected = false;
        this.navigationItems = [
          { text: 'About us', href: '/aboutUs', selected: '' },
          { text: 'Why Talent Check', href: '/aboutUs#WhyTalent', selected: '' },
          { text: 'How it works', href: '/aboutUs#HowItWorks', selected: '' },
          { text: 'Trusted by', href: '/aboutUs#TrustedBy', selected: '' },
          { text: 'Plans', href: '/aboutUs#Plans', selected: '' },
          { text: 'Resources', href: '/aboutUs#Resources', selected: '' },
          { text: 'Contact us', href: '/aboutUs#ContactUs', selected: '' },
        ];
      }
    });
    }


}
