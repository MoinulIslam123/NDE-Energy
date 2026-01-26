import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
  OnInit,
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
  }

  partners = [
    { name: 'Cumming', logo: 'assets/_com1.jpg' },
    { name: 'Generac', logo: 'assets/_com2.jpg' },
    { name: 'Caterpillar', logo: 'assets/_com3.jpg' },
  ];

  faqs = [
    {
      question: 'What is NDE Energy?',
      answer:
        'NDE Energy Ltd provides industrial generator solutions for all your power needs.',
    },
    {
      question: 'Can I customize my generator?',
      answer:
        'Yes, we offer tailored generator systems for specific power requirements.',
    },
    {
      question: 'How do I place an order?',
      answer:
        'You can contact us via our website contact form or call our sales team.',
    },
  ];
}
