import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  phone = '';
  otp = '';
  dummyOtp = '';

  constructor(private router: Router) {}

  sendOtp() {
    // Simulate API call
    this.dummyOtp = '1234';
    alert('Dummy OTP sent: 1234');
  }

  onLogin() {
    if (this.otp === this.dummyOtp) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid Creadentials');
    }
  }
}
