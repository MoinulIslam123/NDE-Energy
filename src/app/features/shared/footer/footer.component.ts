import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyInfo = {
    name: 'NDE Energy Ltd',
    description:
      'NDE Energy Ltd delivers reliable generator solutions, power systems, and professional services for industrial and commercial needs.',
    address: 'House 22 | Road 4 | Block C | Banani, Dhaka 1213, Bangladesh',
    phone: '+880 1XXXXXXXXX',
    email: 'info@ndeenergy.com',
  };
}
