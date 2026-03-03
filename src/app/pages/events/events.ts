import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events.html'
})
export class EventsComponent {
  showSuccess = false;

  submitInquiry() {
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 5000);
  }
}
