import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {} from 'rxjs';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.css',
})
export class WhyChooseComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.initScrollReveal();
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
  apartList = [
    {
      title: 'Certified Engineers',
      desc: 'Highly trained and certified professionals.',
    },
    {
      title: 'Trusted Brands',
      desc: 'Authorized dealer of leading generator brands.',
    },
    {
      title: 'Nationwide Coverage',
      desc: 'Service support across Bangladesh.',
    },
    { title: 'Fast Response', desc: 'Quick diagnosis and service execution.' },
    {
      title: 'Competitive Pricing',
      desc: 'Best market price with quality assurance.',
    },
    { title: 'Quality Assurance', desc: 'Strict testing before delivery.' },
  ];

  advantageList = [
    {
      title: 'Industry Recognition',
      desc: 'Trusted by corporate & government sectors.',
    },
    { title: 'Expert Team', desc: 'Years of generator industry experience.' },
    {
      title: 'Proven Track Record',
      desc: 'Hundreds of successful installations.',
    },
    { title: 'Warranty Support', desc: 'Comprehensive after-sales support.' },
    { title: 'Customer First', desc: 'Customer satisfaction is our priority.' },
    {
      title: 'ISO Certified',
      desc: 'International quality management standards.',
    },
  ];
  // ================= ICON FUNCTIONS =================

  getApartIcon(title: string): string {
    switch (title) {
      case 'Certified Engineers':
        return '👨‍🔧';
      case 'Trusted Brands':
        return '🏭';
      case 'Nationwide Coverage':
        return '📍';
      case 'Fast Response':
        return '⚡';
      case 'Competitive Pricing':
        return '💰';
      case 'Quality Assurance':
        return '✅';
      default:
        return 'ℹ️';
    }
  }

  getAdvantageIcon(title: string): string {
    switch (title) {
      case 'Industry Recognition':
        return '🏆';
      case 'Expert Team':
        return '👥';
      case 'Proven Track Record':
        return '📈';
      case 'Warranty Support':
        return '🛡';
      case 'Customer First':
        return '❤️';
      case 'ISO Certified':
        return '📜';
      default:
        return 'ℹ️';
    }
  }
  compare = [
    { feature: 'Certified Engineers' },
    { feature: '24/7 Support' },
    { feature: 'Genuine Parts' },
    { feature: 'Nationwide Coverage' },
    { feature: 'Price Transparency' },
  ];
  navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];
}
