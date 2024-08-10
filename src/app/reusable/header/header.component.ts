import { Component } from '@angular/core';
declare const myArray: [];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
