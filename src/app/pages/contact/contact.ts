import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
    </div>

    <section class="contact-info">
      <div class="container">
        <div class="contact-grid">
          <div class="info-sidebar">
            <div class="info-card">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Our Location</h3>
                <p>[Area, City, State, ZIP]</p>
              </div>
            </div>
            <div class="info-card">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Phone Number</h3>
                <p>+91 [Phone Number]</p>
                <p>+91 [Secondary Number]</p>
              </div>
            </div>
            <div class="info-card">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email Address</h3>
                <p>info&#64;spiceroyale.com</p>
                <p>reservations&#64;spiceroyale.com</p>
              </div>
            </div>
            <div class="info-card">
              <i class="fas fa-clock"></i>
              <div>
                <h3>Opening Hours</h3>
                <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.41103323!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
              width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="quick-contact bg-light">
      <div class="container text-center">
        <h2>Instant Communication</h2>
        <p>Have a quick question? Reach out to us via WhatsApp or a direct call.</p>
        <div class="contact-btns">
          <a href="tel:[Phone Number]" class="btn btn-primary">
            <i class="fas fa-phone-alt"></i> Call Us Directly
          </a>
          <a href="https://wa.me/[Phone Number]" target="_blank" class="btn" style="background: #25d366; color: white;">
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 50px;
    }

    .info-sidebar {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .info-card {
      display: flex;
      gap: 20px;
      padding: 25px;
      background: var(--white);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      transition: var(--transition);
    }

    .info-card:hover { transform: translateX(10px); color: var(--primary); }

    .info-card i {
      font-size: 1.8rem;
      color: var(--primary);
      margin-top: 5px;
    }

    .info-card h3 { font-size: 1.1rem; margin-bottom: 8px; font-family: 'Poppins', sans-serif; text-transform: uppercase; letter-spacing: 1px; }
    .info-card p { color: var(--text-light); margin-bottom: 0; }

    .map-container {
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .contact-btns {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 40px;
    }

    .contact-btns .btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 30px;
    }

    @media (max-width: 991px) {
      .contact-grid { grid-template-columns: 1fr; }
      .map-container { order: -1; }
    }

    @media (max-width: 768px) {
      .contact-btns { flex-direction: column; align-items: center; }
      .contact-btns .btn { width: 100%; max-width: 300px; }
    }
  `]
})
export class ContactComponent { }
