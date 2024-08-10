import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
})
export class HeaderMobileComponent {
  headerData = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About us',
      url: '#about-us',
    },
    {
      name: 'Menu',
      url: '#menu',
    },
    {
      name: 'Reviews',
      url: '#reviews',
    },
    {
      name: 'Gallery',
      url: '#gallary',
    },
    {
      name: 'Contact Us',
      url: '#contact-us',
    },
  ];
}
