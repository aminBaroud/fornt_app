import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navigationItems = [
    { text: 'About us', href: '#aboutUs' },
    { text: 'Why Talent Check', href: '#whyTalentCheck' },
    { text: 'How it works', href: '#howItWorks' },
    { text: "Trusted by", href: "#trustedBy" },
    { text: "Plans", href: "#plans" },
    { text: 'Resources', href: '#resources' },
    { text: 'Contact us', href: '#contactUs' },
  ];
}
