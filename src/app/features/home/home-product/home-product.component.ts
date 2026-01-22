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

interface Product {
  name: string;
  img: string;
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
  imports: [CommonModule],
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css'],
})
export class HomeProductComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
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
      name: 'BLDC Motors',
      image: 'assets/images/bldc-category.jpg',
      products: [
        { name: 'UAV Engine', img: 'assets/Diesel Generator 2.png' },
        { name: 'Robot Joint Motor', img: 'assets/Diesel Generator 2.png' },
        { name: 'Gimbal Motor', img: 'assets/Diesel Generator 2.png' },
        { name: 'Hub Motor', img: 'assets/Diesel Generator 2.png' },
      ],
    },
    {
      name: 'Servo Motors',
      image: 'assets/images/servo-category.jpg',
      products: [
        { name: 'AC Servo', img: 'assets/Diesel Generator 2.png' },
        { name: 'DC Servo', img: 'assets/Diesel Generator 2.png' },
        { name: 'Industrial Servo', img: 'assets/Diesel Generator 2.png' },
        { name: 'Mini Servo', img: 'assets/Diesel Generator 2.png' },
        { name: 'Mini Servo 2', img: 'assets/Diesel Generator 2.png' },
      ],
    },
  ];
}
