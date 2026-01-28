import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  showToast = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.init3DCardEffect();
  }

  // Handle form submission
  submitForm(form: any) {
    form.reset();
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  // 3D Card tilt effect
  init3DCardEffect() {
    const cards = document.querySelectorAll<HTMLElement>('.transform-card');
    cards.forEach((card: HTMLElement) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    });
  }
}
