import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  mobileMenu = false;
  activeSection: string = 'hero';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  navigate(route: string, fragment?: string) {
    this.mobileMenu = false;

    if (fragment) {
      this.router.navigate([route]).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 50);
      });
    } else {
      this.router.navigate([route]);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = [
      'hero',
      'products',
      'why-us',
      'partners',
      'faq',
      'contact',
    ];
    const scrollPos = window.scrollY + 120; // offset for navbar

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeSection = section;
        }
      }
    }
  }
}
