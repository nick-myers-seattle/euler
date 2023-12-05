import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(private router: Router, private http: HttpClient) {
    this.checkoutForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  sendEmail() {
    if (this.checkoutForm.valid) {
      this.http.post('https://pythonapiserver.azurewebsites.net/v1/send-email', {
        email: this.checkoutForm.value.email,
        name: this.checkoutForm.value.name
      }).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
    else {
      alert('Please enter your name and a valid email address.');
    }
  }
}
