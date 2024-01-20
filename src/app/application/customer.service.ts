import { Injectable } from "@angular/core";
import data_online from "../../assets/data/customers_online.json";
import data_recent from "../../assets/data/customers_recent.json";
import { ICustomerService } from "../domain/customer.interface";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../domain/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService{
  private customersRecent!: Customer[]
  private customersOnline!: Customer[];

  constructor(private _http: HttpClient) { }

  getCustomersRecent(): Customer[] {
    this.customersRecent = data_recent.customers_recent;
    return this.customersRecent;
  }

  getCustomersOnline(): Customer[] {
    this.customersOnline = data_online.customers_online;
    return this.customersOnline;
  }
}
