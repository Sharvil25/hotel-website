import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menus = [
    {
      name: 'Traditional Cones:',
      items: ['Margherita', 'Giardiniera', 'Veggie Supreme', 'Pesto Genovese'],
    },
    {
      name: 'Creme Cheese Cones:',
      items: [
        'Jalapeno N Olive Creme Cheese',

        'Corn N Creme Cheese',

        'Potato Fries N Creme Cheese',
      ],
    },
    {
      name: 'Desi Cones:',
      items: ['Mumbai Chat', 'Mini Vada', 'Paneer Tikka Talk'],
    },
    {
      name: 'Global Cones:',
      items: [
        'Veggie Mexicana',

        'American Hot Hot',

        'Sichuan Spring Veggie',

        'Crunchy Veg Siracha',

        'Cottage Cheese BBQ',

        'Cottage Cheese Piri Piri',
      ],
    },
    {
      name: 'Waffles:',
      items: [
        'Cream Waffle Royale',

        'White Chocolate Bizzard',

        'Oreos on Mine',

        'Salted Caramel',

        'Nuttela Choc Indulgence',
      ],
    },
    {
      name: 'Pocket Fries:',
      items: ['Classic Salted', 'Lemon Chilli', 'Piri Piri', 'Siracha'],
    },
    {
      name: 'Shakes:',
      items: [
        'Just Orio Drunk',

        'Bubble Gum Strawberry',

        'Hazed & Confused',

        'Ferrero Rocher',

        'Blueberry Creme Cheese',
      ],
    },
  ];
}
