import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Our Menu</h1>
        <p>A symphony of spices and flavors</p>
      </div>
    </div>

    <section class="menu-section">
      <div class="container">
        <!-- Category Navigation -->
        <div class="menu-nav">
          <button *ngFor="let cat of categories" 
                  [class.active]="activeCategory === cat.id"
                  (click)="activeCategory = cat.id">
            {{cat.name}}
          </button>
        </div>

        <!-- Menu Grid -->
        <div class="menu-display">
          <div class="category-group fade-in" *ngFor="let cat of categories" [hidden]="activeCategory !== cat.id">
            <div class="section-title">
              <h2>{{cat.name}}</h2>
            </div>
            <div class="items-grid">
              <div class="menu-item" *ngFor="let item of getItems(cat.id)">
                <div class="item-header">
                  <h3>{{item.name}}</h3>
                  <span class="price">₹{{item.price}}</span>
                </div>
                <p class="description">{{item.description}}</p>
                <div class="item-badge" *ngIf="item.popular">Chef's Choice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Food Highlight -->
    <section class="featured-banner bg-light">
      <div class="container">
        <div class="banner-content">
          <div class="banner-text">
            <h2>The Royal Platter</h2>
            <p>Experience the ultimate selection of our finest main courses, served with artisanal breads and aromatic saffron rice. Perfect for sharing with family and friends.</p>
            <a href="tel:[Phone Number]" class="btn btn-primary">Book a Table Now</a>
          </div>
          <div class="banner-img">
            <img src="assets/biryani_featured_1772449826640.png" alt="Royal Platter">
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
    .page-header h1 { color: var(--primary); font-size: 3rem; }

    .menu-nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 60px;
    }

    .menu-nav button {
      padding: 12px 25px;
      border: 1px solid var(--primary);
      background: transparent;
      color: var(--primary);
      border-radius: 30px;
      cursor: pointer;
      font-weight: 500;
      transition: var(--transition);
    }

    .menu-nav button:hover, .menu-nav button.active {
      background: var(--primary);
      color: var(--white);
    }

    .items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .menu-item {
      padding: 25px;
      border-bottom: 1px dashed #ddd;
      position: relative;
      transition: var(--transition);
    }

    .menu-item:hover {
      background: var(--bg-light);
      border-radius: 8px;
      transform: scale(1.02);
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .item-header h3 {
      font-size: 1.25rem;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 0;
    }

    .price {
      color: var(--primary);
      font-weight: 700;
      font-size: 1.2rem;
    }

    .description {
      color: var(--text-light);
      font-size: 0.95rem;
      margin-bottom: 0;
    }

    .item-badge {
      position: absolute;
      top: 5px;
      right: 25px;
      font-size: 0.7rem;
      background: var(--primary);
      color: var(--white);
      padding: 2px 10px;
      border-radius: 10px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .banner-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .banner-text h2 { font-size: 2.5rem; margin-bottom: 20px; }
    .banner-text p { margin-bottom: 30px; font-size: 1.1rem; color: var(--text-light); }

    .banner-img img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      .items-grid { grid-template-columns: 1fr; }
      .banner-content { grid-template-columns: 1fr; text-align: center; }
    }
  `]
})
export class MenuComponent {
  activeCategory = 'starters';

  categories = [
    { id: 'starters', name: '🟢 Starters' },
    { id: 'main', name: '🟢 Main Course' },
    { id: 'breads', name: '🟢 Breads' },
    { id: 'rice', name: '🟢 Rice' },
    { id: 'desserts', name: '🟢 Desserts' }
  ];

  menuItems = [
    // Starters
    { id: 1, name: 'Paneer Tikka', category: 'starters', price: 220, description: 'Cottage cheese marinated in yogurt and spices, grilled in tandoor.', popular: true },
    { id: 2, name: 'Veg Manchurian', category: 'starters', price: 190, description: 'Vegetable balls in spicy ginger-garlic soy sauce.' },
    { id: 3, name: 'Crispy Corn', category: 'starters', price: 180, description: 'Deep fried tender corn kernels tossed with spices and veggies.' },
    { id: 4, name: 'Chicken Lollipop', category: 'starters', price: 260, description: 'Succulent chicken wings fried and tossed in spicy sauce.', popular: true },
    { id: 5, name: 'Hara Bhara Kabab', category: 'starters', price: 200, description: 'Healthy and delicious green vegetable patties.' },

    // Main Course
    { id: 6, name: 'Butter Paneer Masala', category: 'main', price: 280, description: 'Classic paneer dish in a rich and creamy tomato-based gravy.', popular: true },
    { id: 7, name: 'Veg Kolhapuri', category: 'main', price: 260, description: 'Spicy mixed vegetable dish from the heart of Maharashtra.' },
    { id: 8, name: 'Dal Tadka', category: 'main', price: 210, description: 'Yellow lentils tempered with ghee, garlic, and cumin.' },
    { id: 9, name: 'Chicken Handi', category: 'main', price: 340, description: 'Tender chicken cooked in a traditional clay pot with rich gravy.', popular: true },
    { id: 10, name: 'Mutton Curry', category: 'main', price: 420, description: 'Slow-cooked mutton with aromatic spices and thick gravy.' },

    // Breads
    { id: 11, name: 'Butter Naan', category: 'breads', price: 40, description: 'Soft tandoori bread with a generous spread of butter.' },
    { id: 12, name: 'Tandoori Roti', category: 'breads', price: 25, description: 'Whole wheat bread baked in a traditional clay oven.' },
    { id: 13, name: 'Garlic Naan', category: 'breads', price: 60, description: 'Naan topped with minced garlic and fresh coriander.' },

    // Rice
    { id: 14, name: 'Veg Biryani', category: 'rice', price: 240, description: 'Aromatic basmati rice cooked with mixed vegetables and spices.' },
    { id: 15, name: 'Chicken Biryani', category: 'rice', price: 320, description: 'Traditional spice-marinated chicken layered with long-grain rice.', popular: true },
    { id: 16, name: 'Jeera Rice', category: 'rice', price: 180, description: 'Simple and aromatic cumin-tempered basmati rice.' },

    // Desserts
    { id: 17, name: 'Gulab Jamun', category: 'desserts', price: 120, description: 'Deep-fried milk dumplings soaked in sugar syrup.' },
    { id: 18, name: 'Ice Cream', category: 'desserts', price: 110, description: 'Variety of flavors including Vanilla, Chocolate, and Mango.' },
    { id: 19, name: 'Brownie with Ice Cream', category: 'desserts', price: 180, description: 'Warm chocolate brownie with a scoop of vanilla ice cream.', popular: true }
  ];

  getItems(categoryId: string) {
    return this.menuItems.filter(item => item.category === categoryId);
  }
}
