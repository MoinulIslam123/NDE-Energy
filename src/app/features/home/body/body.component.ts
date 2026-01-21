import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  // Dummy data for other sections
  products = [
    {
      name: 'Diesel Generator 100kVA',
      img: 'assets/Copilot_20260120_165328.png',
    },
    { name: 'Gas Generator 200kVA', img: 'assets/Copilot_20260120_165328.png' },
    {
      name: 'Hybrid Generator 150kVA',
      img: 'assets/Copilot_20260120_165328.png',
    },
    {
      name: 'Portable Generator 50kVA',
      img: 'assets/Copilot_20260120_165328.png',
    },
  ];

  partners = [
    { name: 'Cummins', logo: 'assets/Copilot_20260120_165328.png' },
    { name: 'Generac', logo: 'assets/Copilot_20260120_165328.png' },
    { name: 'Caterpillar', logo: 'assets/Copilot_20260120_165328.png' },
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
