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
  searchRecent: any = [];

  constructor(
    private router: Router,
    private _customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getCustomerRecent();
    this.getCustomerOnline();
    this.searchRecent = [...this.customersRecent];
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

  searchCustomersRecent(event: any) {
    const search = event.target.value.toLowerCase();
    this.searchRecent = this.customersRecent.filter((customer) =>
      customer.name!.toLowerCase().indexOf(search) > -1)
  }
}
