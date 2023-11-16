import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  name = '';
  email = '';

  constructor(private router: Router) { }

  sendEmail() {
    this.router.navigate(['/']);
  }
}
