import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer>
      <div class="container footer-grid">
        <div class="footer-info">
          <h3>The Spice Royale</h3>
          <p>Experience the finest authentic Indian cuisine in an elegant and luxurious atmosphere. Perfect for families, parties, and corporate events.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About Us</a></li>
            <li><a routerLink="/menu">Our Menu</a></li>
            <li><a routerLink="/gallery">Gallery</a></li>
            <li><a routerLink="/events">Banquet & Events</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p><i class="fas fa-map-marker-alt"></i> [Area, City, State, ZIP]</p>
          <p><i class="fas fa-phone"></i> [Phone Number]</p>
          <p><i class="fas fa-envelope"></i> info@spiceroyale.com</p>
          <p><i class="fas fa-clock"></i> Mon-Sun: 11:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2024 The Spice Royale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--secondary);
      color: var(--white);
      padding: 80px 0 0;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr;
      gap: 50px;
      margin-bottom: 50px;
    }

    h3, h4 {
      color: var(--primary);
      margin-bottom: 25px;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .footer-info p {
      color: #ccc;
      margin-bottom: 25px;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--white);
      transition: var(--transition);
    }

    .social-links a:hover {
      background: var(--primary);
      transform: translateY(-3px);
    }

    .footer-links ul {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: #ccc;
      transition: var(--transition);
    }

    .footer-links a:hover {
      color: var(--primary);
      padding-left: 5px;
    }

    .footer-contact p {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      color: #ccc;
      margin-bottom: 15px;
    }

    .footer-contact i {
      color: var(--primary);
      margin-top: 5px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 25px 0;
      text-align: center;
      font-size: 0.9rem;
      color: #888;
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `]
})
export class FooterComponent { }
