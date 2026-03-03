import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  // template: [home.html],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  featuredDishes = [
    {
      name: 'Paneer Tikka Royale',
      description: 'Marinated cottage cheese cubes grilled to perfection with bell peppers and traditional spices.',
      image: 'assets/paneer_tikka_featured_1772449795864.png'
    },
    {
      name: 'Royal Chicken Biryani',
      description: 'Aromatic long-grain basmati rice cooked with tender chicken and a secret blend of royal spices.',
      image: 'assets/biryani_featured_1772449826640.png'
    },
    {
      name: 'Butter Chicken Gold',
      description: 'Tender tandoori chicken simmered in a rich, creamy tomato gravy with a touch of honey and butter.',
      image: 'assets/butter_chicken_featured_1772449923037.png'
    },
    {
      name: 'Veg Manchurian Silk',
      description: 'Crispy vegetable dumplings tossed in a savory and spicy Indo-Chinese ginger-garlic sauce.',
      image: 'assets/veg_manchurian_featured_1772450413168.png'
    },
    {
      name: 'Decadent Brownie Bliss',
      description: 'Warm, gooey chocolate brownie served with premium vanilla ice cream and chocolate drizzle.',
      image: 'assets/dessert_featured_1772450427863.png'
    }
  ];
}
