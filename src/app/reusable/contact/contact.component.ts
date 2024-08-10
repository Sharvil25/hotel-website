import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fa-solid fa-location-dot',
      desc: 'Shop No. 3, Avighna lx, Building No. 4, Dr B.A.Road, Opp. to Ladoo Samrath, Lalbaug, Mumbai- 400012',
    },
    {
      icon: 'fa-solid fa-phone',
      desc: '+91 7400143648',
    },
    {
      icon: 'fa-solid fa-envelope',
      desc: 'info@krustycone.com',
    },
  ];
  socialIcons = [
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-square-instagram',
    'fa-solid fa-pizza-slice',
  ];
}
