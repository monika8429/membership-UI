import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [RouterModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  planTitle = '';
  planPrice = 0;
  validity = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const plan = this.route.snapshot.paramMap.get('plan');
    if (plan === 'royal') {
      this.planTitle = 'ROYAL BOX';
      this.planPrice = 51000;
      this.validity = '30 trading days';
    } else if (plan === 'elite') {
      this.planTitle = 'ELITE';
      this.planPrice = 6990;
      this.validity = '10 trading days';
    } else {
      this.planTitle = 'BUSINESS';
      this.planPrice = 3990;
      this.validity = '5 trading days';
    }
  }

  confirm() {
    alert(`Payment confirmed for ${this.planTitle}`);
    this.router.navigate(['/login']);
  }
}
