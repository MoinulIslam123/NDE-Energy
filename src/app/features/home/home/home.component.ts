import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from "../body/body.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, BodyComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // ✅ MUST be plural
})
export class HomeComponent {}
