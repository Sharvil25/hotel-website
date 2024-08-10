import { Component } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent {
  images = [
    'assets/images/second.png',
    'assets/images/second.png',
    'assets/images/first.png',
  ];

  selectedImage: string | null = null;

  openImage(image: string): void {
    this.selectedImage = image;
    setTimeout(() => {
      const overlay = document.querySelector('.overlay') as HTMLElement;
      overlay.classList.add('active');
    }, 10);
  }

  closeImage(): void {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.classList.remove('active');
    setTimeout(() => {
      this.selectedImage = null;
    }, 500); // Wait for the transition to finish
  }
}
