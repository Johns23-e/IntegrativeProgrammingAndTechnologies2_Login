import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  username = '';
  password = '';

  message = '';
  error = '';

  correctUsername = 'JOHN ROQUE ABINA';
  correctPassword = '2023-00145';

  onLogin() {
    if (
      this.username.trim().toUpperCase() === this.correctUsername &&
      this.password.trim() === this.correctPassword
    ) {
      this.error = '';
      this.message = 'Hello, Abina, John Roque B. WELCOME TO IntegrativeProgrammingAndTechnologies 2. Have fun to learn!';
    } else {
      this.message = '';
      this.error = 'Invalid username or password. Please try again.';
    }
  }
}
