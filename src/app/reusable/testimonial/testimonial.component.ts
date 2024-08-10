import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent {
  testimonials = [
    {
      name: 'Vipul Shah',
      desc: 'Amazing food , a different concept the ambience is just on point , loved their shakes , hazelnut shake is a must have and the staff is also friendly !.',
    },
    {
      name: 'Rakhi Sonkuare',
      desc: 'Amazing and cute lil place!! I tried Ferrero Rocher shake was simply awesome. Also had Jalapeno and olive creme cheese cone served with salted fries and trust me you have to keep ur stomach half empty for this cheesy fun!! A must visit🤩!!.',
    },
    {
      name: 'Jitendra Jain',
      desc: 'Loved it!! Just amazing 😊😍😍😍 Pizza cones and the hazel shake my new fav😍💕💕 A must visit for every foodie lover. Ambiance and food a perfect combo at krusty cone!!!❤️❤️.',
    },
  ];
}
