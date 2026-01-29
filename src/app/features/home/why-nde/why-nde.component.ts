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
  selector: 'app-why-nde',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-nde.component.html',
  styleUrl: './why-nde.component.css',
})
export class WhyNdeComponent {
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
}
