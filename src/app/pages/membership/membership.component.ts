import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-membership',
  imports: [RouterModule, CommonModule],
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
plans = [
  {
    name: 'ROYAL BOX',
    price: 51000,
    details: 'The Ultimate access for those who demand the best',
    tag: 'Premium Pick',
    route: 'royal',
    features: [
      '15 Trading Days Explore Fast: Decide Smart',
      'Highly accessible',
      'One paper bot',
      'Live Reports',
      'Early access',
      'All new limited features'
    ]
  },
  {
    name: 'ELITE',
    price: 6990,
    details: 'All the rights tools to boost your experience',
    tag: 'Popular',
    route: 'elite',
    features: [
      '15 Trading Days Explore Fast: Decide Smart',
      'Highly accessible',
      'One paper bot',
      'Live Reports',
      'Early access',
      'All new limited features'
    ]
  },
  {
    name: 'BUSINESS',
    price: 3990,
    details: 'Essential benefits to get you started strong',
    tag: 'Best Seller',
    route: 'business',
    features: [
      '15 Trading Days Explore Fast: Decide Smart',
      'Highly accessible',
      'One paper bot',
      'Live Reports',
      'Early access',
      'All new limited features'
    ]
  }
];

  constructor(private router: Router) {}

  selectPlan(plan: any) {
    this.router.navigate(['/payment', plan.route]);
  }
}
