import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Router, NavigationEnd } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Function to send page views to Google Analytics
function sendPageView(url: string) {
  (window as any).gtag('config', 'G-XXXXXXXXXX', {
    page_path: url,
  });
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the routes
    provideHttpClient(), // Provide the HttpClient
    importProvidersFrom(BrowserAnimationsModule), // Import the providers from the BrowserAnimationsModule module

    // Google Analytics Page View Tracking
    {
      provide: 'ROUTER_LISTENER',
      useFactory: () => {
        const router = inject(Router);
        router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            sendPageView(event.urlAfterRedirects);
          }
        });
      },
    },
  ],
}).catch((err) => console.error(err));
