import { Component } from '@angular/core';
import {
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements AfterViewInit {
  @ViewChildren('cards') cards!: QueryList<ElementRef>;
  private productsObserved = false; // to prevent multiple observers
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.animateHighlights(); // existing observer for highlight cards
  }
  animateHighlights() {
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
}
