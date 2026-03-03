import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Our Story</h1>
        <p>A legacy of taste and tradition</p>
      </div>
    </div>

    <section class="about-story">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <span class="subtitle">A Journey of Flavors</span>
            <h2>Authentic Indian Dining Redefined</h2>
            <p>
              Founded with a passion for preserving the rich culinary heritage of India, The Spice Royale is more than just a restaurant; it's a celebration of culture, spice, and hospitality. Our journey began with a simple vision: to bring the royal flavors of India to [City] in an atmosphere that matches the grandeur of our cuisine.
            </p>
            <p>
              At The Spice Royale, we believe that great food starts with the finest ingredients. Every spice is hand-picked, every dish is crafted with precision, and every guest is treated like royalty. Our family-friendly environment ensures that you can share these moments with your loved ones, creating memories that last a lifetime.
            </p>
            <p>
              From the bustling streets of Delhi to the royal kitchens of Hyderabad, our menu is a curated collection of India's most loved dishes. We take pride in our hygiene standards and our commitment to freshness, ensuring that every bite is as healthy as it is delicious.
            </p>
          </div>
          <div class="about-image">
            <img src="assets/hero_food_bg_1772449770482.png" alt="Luxury Dining">
          </div>
        </div>
      </div>
    </section>

    <section class="interior bg-light">
      <div class="container">
        <div class="section-title">
          <h2>The Royal Ambience</h2>
          <p>Luxurious spaces designed for your comfort</p>
        </div>
        <div class="interior-grid">
          <div class="interior-item">
            <img src="assets/paneer_tikka_featured_1772449795864.png" alt="Interior 1">
            <div class="item-overlay">
              <h3>Elegant Dining Hall</h3>
            </div>
          </div>
          <div class="interior-item">
            <img src="assets/biryani_featured_1772449826640.png" alt="Interior 2">
            <div class="item-overlay">
              <h3>Family Lounge</h3>
            </div>
          </div>
          <div class="interior-item">
            <img src="assets/butter_chicken_featured_1772449923037.png" alt="Interior 3">
            <div class="item-overlay">
              <h3>Private Dining</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <div class="values-grid">
          <div class="value-card">
            <i class="fas fa-heart"></i>
            <h3>Passion</h3>
            <p>We cook with love and dedication to the craft of Indian culinary arts.</p>
          </div>
          <div class="value-card">
            <i class="fas fa-certificate"></i>
            <h3>Quality</h3>
            <p>Only the freshest, highest-quality ingredients enter our kitchen.</p>
          </div>
          <div class="value-card">
            <i class="fas fa-smile"></i>
            <h3>Hospitality</h3>
            <p>Treating every guest with the warmth and respect they deserve.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: var(--secondary);
      padding: 150px 0 80px;
      text-align: center;
      color: var(--white);
    }

    .page-header h1 { color: var(--primary); font-size: 3rem; margin-bottom: 10px; }
    .page-header p { font-size: 1.2rem; opacity: 0.8; }

    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .subtitle {
      color: var(--primary);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.9rem;
      display: block;
      margin-bottom: 15px;
    }

    .about-content h2 { font-size: 2.5rem; margin-bottom: 25px; }
    .about-content p { color: var(--text-light); margin-bottom: 20px; font-size: 1.05rem; }

    .about-image img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .interior-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .interior-item {
      position: relative;
      height: 350px;
      border-radius: 12px;
      overflow: hidden;
    }

    .interior-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }

    .item-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 30px;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: var(--white);
    }

    .interior-item:hover img { transform: scale(1.1); }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      text-align: center;
    }

    .value-card i { font-size: 3rem; color: var(--primary); margin-bottom: 20px; }
    .value-card h3 { font-size: 1.5rem; margin-bottom: 15px; }
    .value-card p { color: var(--text-light); }

    @media (max-width: 991px) {
      .about-grid { grid-template-columns: 1fr; }
      .about-image { order: -1; }
    }
  `]
})
export class AboutComponent { }
