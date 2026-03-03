import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Banquet & Events</h1>
        <p>Your perfect venue for life's biggest celebrations</p>
      </div>
    </div>

    <section class="banquet-intro">
      <div class="container">
        <div class="banquet-grid">
          <div class="banquet-image">
            <img src="assets/hero_food_bg_1772449770482.png" alt="Banquet Hall">
          </div>
          <div class="banquet-info">
            <span class="subtitle">Luxury & Grace</span>
            <h2>The Grand Royale Ballroom</h2>
            <p>
              Our spacious, air-conditioned banquet hall is designed to host events ranging from intimate family gatherings to grand wedding receptions. With a capacity of 50 to 300 guests, we offer a versatile space that can be customized to suit your theme and requirements.
            </p>
            <ul class="features">
              <li><i class="fas fa-check-circle"></i> Fully Air Conditioned</li>
              <li><i class="fas fa-check-circle"></i> Elegant Stage Setup</li>
              <li><i class="fas fa-check-circle"></i> Custom Catering Services</li>
              <li><i class="fas fa-check-circle"></i> Professional Sound & Lighting</li>
              <li><i class="fas fa-check-circle"></i> Ample Parking Space</li>
              <li><i class="fas fa-check-circle"></i> Dedicated Event Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="event-types bg-light">
      <div class="container">
        <div class="section-title">
          <h2>Perfect for Every Occasion</h2>
        </div>
        <div class="occasions-grid">
          <div class="occasion-card">
            <i class="fas fa-ring"></i>
            <h3>Weddings</h3>
            <p>Celebrate your union in an atmosphere of royal elegance.</p>
          </div>
          <div class="occasion-card">
            <i class="fas fa-birthday-cake"></i>
            <h3>Parties</h3>
            <p>Birthday bashes, anniversaries, and family reunions.</p>
          </div>
          <div class="occasion-card">
            <i class="fas fa-briefcase"></i>
            <h3>Corporate Events</h3>
            <p>Seminars, meetings, and company dinners with professional setup.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="inquiry">
      <div class="container">
        <div class="inquiry-form-container">
          <div class="section-title">
            <h2>Banquet Inquiry</h2>
            <p>Let us help you plan your next big event</p>
          </div>
          <form #inquiryForm="ngForm" (ngSubmit)="submitInquiry()">
            <div class="form-row">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" name="name" ngModel required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" ngModel required placeholder="+91 XXXXX XXXXX">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Event Date</label>
                <input type="date" name="date" ngModel required>
              </div>
              <div class="form-group">
                <label>Number of Guests</label>
                <input type="number" name="guests" ngModel required placeholder="50-300">
              </div>
            </div>
            <div class="form-group">
              <label>Tell us more about your event</label>
              <textarea name="message" ngModel rows="5" placeholder="Any special requirements?"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-lg" [disabled]="!inquiryForm.valid">Send Inquiry</button>
            </div>
          </form>
          <div class="success-msg" *ngIf="showSuccess">
            <i class="fas fa-check-circle"></i>
            <p>Thank you! Our event manager will call you shortly.</p>
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

    .banquet-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .subtitle { color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; }
    .banquet-info h2 { font-size: 2.5rem; margin-bottom: 25px; }

    .features { list-style: none; margin-top: 30px; }
    .features li { margin-bottom: 15px; display: flex; align-items: center; gap: 15px; font-weight: 500; }
    .features i { color: var(--primary); font-size: 1.2rem; }

    .banquet-image img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }

    .occasions-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      text-align: center;
    }

    .occasion-card {
      background: var(--white);
      padding: 40px;
      border-radius: 12px;
      transition: var(--transition);
    }

    .occasion-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
    .occasion-card i { font-size: 3rem; color: var(--primary); margin-bottom: 25px; }

    .inquiry-form-container {
      max-width: 800px;
      margin: 0 auto;
      background: var(--white);
      padding: 50px;
      border-radius: 15px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.08);
      position: relative;
    }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-group { margin-bottom: 25px; }
    .form-group label { display: block; margin-bottom: 10px; font-weight: 500; color: var(--text-dark); }
    
    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-family: inherit;
      transition: var(--transition);
    }

    input:focus, textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.1); }

    .success-msg {
      margin-top: 30px;
      text-align: center;
      color: #2e7d32;
      animation: fadeIn 0.5s ease;
    }
    .success-msg i { font-size: 2rem; margin-bottom: 10px; }

    @media (max-width: 991px) {
      .banquet-grid { grid-template-columns: 1fr; gap: 40px; }
      .occasions-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 768px) {
      .form-row { grid-template-columns: 1fr; }
      .inquiry-form-container { padding: 30px 20px; }
    }
  `]
})
export class EventsComponent {
  showSuccess = false;

  submitInquiry() {
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 5000);
  }
}
