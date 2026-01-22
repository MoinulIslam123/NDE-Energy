import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval!: ReturnType<typeof setInterval>;

  banners = [
    {
      image: 'assets/Banner.jpg',
      // title: 'NDE Energy Ltd',
      // subtitle: 'Reliable, Industrial Generator & Power Solutions',
      // button: 'Learn More',
    },
    {
      image: 'assets/Copilot_20260120_165412.png',
      title: 'Industrial Power Systems',
      subtitle: 'Diesel & Gas Generator Solutions',
      button: 'Our Products',
    },
  
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); // every 4 seconds
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.banners.length - 1 ? 0 : this.currentIndex + 1;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.banners.length - 1 : this.currentIndex - 1;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
