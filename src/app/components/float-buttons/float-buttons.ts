import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-float-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="float-buttons">
      <a href="tel:[Phone Number]" class="float-btn call-btn" title="Call Now">
        <i class="fas fa-phone"></i>
      </a>
      <a href="https://wa.me/[Phone Number]" target="_blank" class="float-btn whatsapp-btn" title="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  `,
  styles: [`
    .float-buttons {
      position: fixed;
      bottom: 30px;
      right: 30px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      z-index: 1000;
    }

    .float-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-size: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: var(--transition);
      animation: pulse 2s infinite;
    }

    .call-btn {
      background-color: var(--primary);
    }

    .whatsapp-btn {
      background-color: #25d366;
    }

    .float-btn:hover {
      transform: scale(1.1) translateY(-5px);
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(197, 160, 89, 0); }
      100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
    }

    .whatsapp-btn {
      animation: pulse-wa 2s infinite;
    }

    @keyframes pulse-wa {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }

    @media (max-width: 768px) {
      .float-buttons {
        bottom: 20px;
        right: 20px;
      }
      .float-btn {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
      }
    }
  `]
})
export class FloatButtonsComponent { }
