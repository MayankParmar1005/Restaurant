import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Gallery</h1>
        <p>A visual feast of our culinary creations</p>
      </div>
    </div>

    <section class="gallery">
      <div class="container">
        <div class="gallery-grid">
          <div class="gallery-item" *ngFor="let img of galleryImages" (click)="openLightbox(img)">
            <img [src]="img.url" [alt]="img.title">
            <div class="gallery-overlay">
              <span>{{img.title}}</span>
              <i class="fas fa-search-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" *ngIf="selectedImage" (click)="closeLightbox()">
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <img [src]="selectedImage.url" [alt]="selectedImage.title">
        <button class="close-btn" (click)="closeLightbox()">&times;</button>
        <div class="lightbox-caption">{{selectedImage.title}}</div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: var(--secondary);
      padding: 150px 0 80px;
      text-align: center;
      color: var(--white);
    }
    .page-header h1 { color: var(--primary); font-size: 3rem; }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .gallery-item {
      position: relative;
      height: 280px;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(61, 43, 31, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      color: var(--white);
      transition: var(--transition);
    }

    .gallery-overlay i { font-size: 2rem; margin-bottom: 10px; }
    .gallery-overlay span { font-weight: 500; letter-spacing: 1px; }

    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .gallery-item:hover img { transform: scale(1.1); }

    /* Lightbox Styles */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }

    .lightbox-content img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 4px;
      border: 3px solid var(--white);
    }

    .close-btn {
      position: absolute;
      top: -40px;
      right: -10px;
      background: none;
      border: none;
      color: var(--white);
      font-size: 2.5rem;
      cursor: pointer;
    }

    .lightbox-caption {
      color: var(--white);
      text-align: center;
      margin-top: 15px;
      font-size: 1.2rem;
      font-family: 'Playfair Display', serif;
    }
  `]
})
export class GalleryComponent {
  selectedImage: any = null;

  galleryImages = [
    { url: 'assets/paneer_tikka_featured_1772449795864.png', title: 'Tantalizing Paneer Tikka' },
    { url: 'assets/biryani_featured_1772449826640.png', title: 'Aromatic Chicken Biryani' },
    { url: 'assets/butter_chicken_featured_1772449923037.png', title: 'Creamy Butter Chicken' },
    { url: 'assets/veg_manchurian_featured_1772450413168.png', title: 'Spicy Veg Manchurian' },
    { url: 'assets/dessert_featured_1772450427863.png', title: 'Decadent Chocolate Brownie' },
    { url: 'assets/hero_food_bg_1772449770482.png', title: 'Royal Dining Experience' },
    // Reusing for demo variety
    { url: 'assets/paneer_tikka_featured_1772449795864.png', title: 'Grilled Starters' },
    { url: 'assets/biryani_featured_1772449826640.png', title: 'Saffron Rice Specialties' }
  ];

  openLightbox(img: any) {
    this.selectedImage = img;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
