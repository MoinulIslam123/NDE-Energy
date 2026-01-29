import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
  OnInit,
  Directive,
} from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'], // <-- corrected
})
export class BodyComponent {
  // <-- implement OnInit
  @ViewChildren('cards') cards!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(entry.target, 'opacity-0');
            this.renderer.removeClass(entry.target, 'translate-y-10');
            this.renderer.addClass(entry.target, 'opacity-100');
            this.renderer.addClass(entry.target, 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% visible
      },
    );

    // Observe all cards continuously
    this.cards.forEach((card) => observer.observe(card.nativeElement));
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) this.animateCounters();
        },
        { threshold: 0.5 },
      );
      statsObserver.observe(statsSection);
    }
  }

  partners = [
    { name: 'Cumming', logo: 'assets/_com1.jpg' },
    { name: 'Generac', logo: 'assets/_com2.jpg' },
    { name: 'Caterpillar', logo: 'assets/_com3.jpg' },
  ];


  // Animate counters when visible

  animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach((el: any) => {
      const target = +el.innerText.replace(/\D/g, '');
      let count = 0;
      const increment = Math.ceil(target / 200);
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          el.innerText = target.toLocaleString();
          clearInterval(interval);
        } else {
          el.innerText = count.toLocaleString();
        }
      }, 10);
    });
  }
}
