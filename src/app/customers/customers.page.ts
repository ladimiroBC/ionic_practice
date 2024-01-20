import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../application/customer.service';
import { Customer } from '../domain/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customersRecent!: Customer[];
  customersOnline!: Customer[];

  constructor(
    private router: Router,
    private _customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getCustomerRecent();
    this.getCustomerOnline();
  }

  navigate() {
    this.router.navigate(['/home']);
  }

  getCustomerRecent() {
    this._customerService.getCustomersRecent().subscribe({
      next: (response) => {
        this.customersRecent = response.customers_recent;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getCustomerOnline() {
    this._customerService.getCustomersOnline().subscribe({
      next: (response) => {
        this.customersOnline = response.customers_online;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
