import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { fader } from './animations/route-animations';
import { SpinnerService } from './services/spinner-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent {
  loading = true

  constructor(private router: Router, private spinnerService: SpinnerService) {
    this.router.events.subscribe((e) => {
      this.navigationInterceptor(e);
    })
  }

  navigationInterceptor(event: any): void {
    if (event instanceof NavigationStart) {
      this.spinnerService.toggleSpinner();
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.spinnerService.toggleSpinner();
      this.loading = false
    }

    if (event instanceof NavigationCancel) {
      this.spinnerService.toggleSpinner();
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.spinnerService.toggleSpinner();
      this.loading = false
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
} 