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

  getCustomerRecent(): Customer[] {
    this.customersRecent = this._customerService.getCustomersRecent();
    return this.customersRecent;
  }

  getCustomerOnline(): Customer[] {
    this.customersOnline = this._customerService.getCustomersOnline();
    return this.customersOnline;
  }
}
