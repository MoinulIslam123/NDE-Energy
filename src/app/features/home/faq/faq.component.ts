import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
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
