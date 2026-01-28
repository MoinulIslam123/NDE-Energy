import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initScrollReveal();
    this.initCounters();
  }

  initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
  }

  initCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter: any) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const update = () => {
        const increment = target / 80;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + '+';
        }
      };

      update();
    });
  }
}
