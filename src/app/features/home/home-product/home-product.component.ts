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
import { Router, RouterModule } from '@angular/router';

interface Product {
  name: string;
  img: string;
  description?: string;
  power?: string;
  fuel?: string;
  application?: string;
  features?: string[];
}

interface Category {
  name: string;
  image: string;
  products: Product[];

  firstProduct?: Product;
  rightProducts?: Product[];
  rightCols?: number;
}

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css'],
})
export class HomeProductComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}
  productCards!: QueryList<ElementRef>;

  ngOnInit() {
    this.categories.forEach((category) => {
      if (category.products.length) {
        category.firstProduct = category.products[0];
        category.rightProducts = category.products.slice(1);

        const n = category.rightProducts.length;
        if (n === 1) category.rightCols = 1;
        else if (n === 2) category.rightCols = 2;
        else if (n === 3) category.rightCols = 3;
        else category.rightCols = 2;
      }
    });
  }

  categories: Category[] = [
    {
      name: 'Generator Set',
      image: 'assets/images/bldc-category.jpg',
      products: [
        {
          name: 'Diesel Generator',
          img: 'assets/Diesel Generator 2.png',
          description:
            'High-performance diesel generator designed for continuous and standby power applications. Built for durability, fuel efficiency, and reliable long-term operation.',
          power: '10 kVA – 2500 kVA',
          fuel: 'Diesel',
          application: 'Industrial, Commercial, Hospitals, Construction Sites',
          features: [
            'Low fuel consumption',
            'Heavy-duty engine',
            'Automatic voltage regulation',
            'Low noise operation',
            'Easy maintenance',
          ],
        },
        {
          name: 'Diesel Generator (Compact)',
          img: 'assets/Diesel Generator.png',
          description:
            'Compact diesel generator ideal for small businesses and residential backup power with stable output and quiet performance.',
          power: '5 kVA – 100 kVA',
          fuel: 'Diesel',
          application: 'Home, Office, Retail Shops',
          features: [
            'Compact design',
            'Fuel efficient engine',
            'Stable power output',
            'Weather-resistant canopy',
          ],
        },
        {
          name: 'Petrol Generator',
          img: 'assets/Patrol Generator.png',
          description:
            'Portable petrol generator suitable for light-duty applications, outdoor use, and emergency backup power.',
          power: '1 kVA – 10 kVA',
          fuel: 'Petrol',
          application: 'Home backup, Outdoor use, Events',
          features: [
            'Lightweight & portable',
            'Quick start',
            'Low maintenance',
            'Reliable performance',
          ],
        },
      ],
    },

    {
      name: 'Advanced Generator Systems',
      image: 'assets/images/servo-category.jpg',
      products: [
        {
          name: 'Stationary Generator',
          img: 'assets/Stationary Generator.png',
          description:
            'Stationary generators provide uninterrupted power supply for critical infrastructure requiring continuous operation.',
          power: '30 kVA – 3000 kVA',
          fuel: 'Diesel / Gas',
          application: 'Factories, Data Centers, Power Plants',
          features: [
            'Continuous duty operation',
            'High efficiency alternator',
            'Remote monitoring support',
            'Industrial-grade control panel',
          ],
        },
        {
          name: 'Gas Generator',
          img: 'assets/Gas Generator.png',
          description:
            'Eco-friendly gas generator system offering low emissions and cost-effective operation for long-term usage.',
          power: '20 kVA – 2000 kVA',
          fuel: 'Natural Gas',
          application: 'Industries, Commercial Buildings',
          features: [
            'Low emission',
            'Lower fuel cost',
            'Silent operation',
            'Environment friendly',
          ],
        },
        {
          name: 'Welding Generator',
          img: 'assets/Welding Generator.png',
          description:
            'Dual-purpose welding generator delivering stable power and professional welding performance on-site.',
          power: '5 kVA – 20 kVA',
          fuel: 'Diesel',
          application: 'Construction, Maintenance, Field Welding',
          features: [
            'Dual welding + power output',
            'Rugged design',
            'Portable frame',
            'Stable arc performance',
          ],
        },
        {
          name: 'Electric Generator',
          img: 'assets/Electric Generator.png',
          description:
            'Reliable electric generator designed for smooth and stable power output with minimal maintenance.',
          power: '3 kVA – 50 kVA',
          fuel: 'Electric',
          application: 'Backup systems, Indoor applications',
          features: [
            'Silent operation',
            'Low maintenance',
            'Compact structure',
            'High efficiency motor',
          ],
        },
        {
          name: 'LPG Generator',
          img: 'assets/lpg-generator.png',
          description:
            'LPG generator offering cleaner energy solution with reduced fuel cost and lower environmental impact.',
          power: '5 kVA – 500 kVA',
          fuel: 'LPG',
          application: 'Commercial, Residential, Hotels',
          features: [
            'Low emission',
            'Cost-effective fuel',
            'Long engine life',
            'Quiet performance',
          ],
        },
      ],
    },
  ];

  // Modal state
  selectedProduct: any = null;

  openModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
