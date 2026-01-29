import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements AfterViewInit {
  mainServices = [
    {
      title: 'Generator Installation',
      icon: 'settings',
      desc: 'Professional installation services by certified engineers, ensuring optimal performance and safety compliance.',
    },
    {
      title: 'Maintenance & Servicing',
      icon: 'build',
      desc: 'Preventive maintenance programs to keep your generators running at peak efficiency with minimal downtime.',
    },
    {
      title: 'Genuine Spare Parts',
      icon: 'inventory_2',
      desc: 'Authentic replacement parts from trusted manufacturers, ensuring reliability and longevity.',
    },
    {
      title: '24/7 Technical Support',
      icon: 'headset_mic',
      desc: 'Round-the-clock emergency support and technical assistance for critical power needs.',
    },
  ];

  additionalServices = [
    {
      title: 'Emergency Repairs',
      icon: 'schedule',
      desc: 'Rapid response team available 24/7 for critical generator breakdowns and emergency repairs.',
    },
    {
      title: 'Extended Warranty',
      icon: 'shield',
      desc: 'Comprehensive warranty packages to protect your investment with coverage for parts and labor.',
    },
  ];

  processSteps = [
    { id: '01', title: 'Consultation', desc: 'Assess your power needs' },
    { id: '02', title: 'Planning', desc: 'Design optimal solution' },
    { id: '03', title: 'Implementation', desc: 'Professional installation' },
    { id: '04', title: 'Support', desc: 'Ongoing maintenance' },
  ];
  ngAfterViewInit() {
    this.initScrollReveal();
  }

  // ================= SCROLL ANIMATION =================
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
}
