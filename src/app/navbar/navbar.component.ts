import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
  constructor(private router: Router) {
    // Scroll to section on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.scrollToSection(fragment);
        }
      }
    });
  }
  ngAfterViewInit() {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbar-menu');

    if (toggler && menu) {
      toggler.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    } else {
      console.error('Navbar toggler or menu element not found');
    }
  }

  navigateToSection(section: string) {
    this.router.navigate(['/#home'], { fragment: section });
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
