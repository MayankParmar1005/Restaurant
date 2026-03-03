import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="isScrolled" [class.mobile-open]="isMobileMenuOpen">
      <div class="container nav-container">
        <div class="logo">
          <a routerLink="/">
            <span class="logo-text">The <span class="highlight">Spice Royale</span></span>
          </a>
        </div>

        <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
          <i class="fas" [ngClass]="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>

        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">About Us</a></li>
          <li><a routerLink="/menu" routerLinkActive="active" (click)="closeMobileMenu()">Menu</a></li>
          <li><a routerLink="/gallery" routerLinkActive="active" (click)="closeMobileMenu()">Gallery</a></li>
          <li><a routerLink="/events" routerLinkActive="active" (click)="closeMobileMenu()">Banquet</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <a routerLink="/events" class="btn btn-primary btn-sm">Book Banquet</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 24px 0;
      transition: var(--transition);
      background: transparent;
    }

    nav.scrolled {
      padding: 12px 0;
      background: var(--glass);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
      letter-spacing: 1px;
    }

    nav.scrolled .logo-text {
      color: var(--white);
    }

    .highlight {
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 30px;
    }

    .nav-links a {
      color: var(--white);
      font-weight: 500;
      font-size: 0.95rem;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: var(--transition);
    }

    .nav-links a:hover::after, .nav-links a.active::after {
      width: 100%;
    }

    .nav-actions {
      display: block;
    }

    .btn-sm {
      padding: 8px 18px;
      font-size: 0.9rem;
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--white);
      font-size: 1.5rem;
      cursor: pointer;
    }

    @media (max-width: 991px) {
      .nav-links {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--secondary);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        transform: translateX(100%);
        transition: var(--transition);
      }

      nav.mobile-open .nav-links {
        transform: translateX(0);
      }

      .mobile-toggle {
        display: block;
        position: relative;
        z-index: 1001;
      }

      .nav-actions {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
