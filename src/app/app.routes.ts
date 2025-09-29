import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
  { path: '', redirectTo: '/membership', pathMatch: 'full' },
  { path: 'membership', component: MembershipComponent },
  { path: 'payment/:plan', component: PaymentComponent }, 
  { path: 'login', component: LoginComponent },
];