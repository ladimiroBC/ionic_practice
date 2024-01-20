import { Injectable } from "@angular/core";
import { ICustomerService } from "../domain/customer.interface";
import { HttpClient } from "@angular/common/http";
import { ApiResponse, Customer } from "../domain/customer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService{
  private urlRecent: string = "../../assets/data/customers_recent.json";
  private urlOnline: string = "../../assets/data/customers_online.json";

  constructor(private _http: HttpClient) { }

  getCustomersRecent(): Observable<ApiResponse<Customer[]>> {
    return this._http.get<ApiResponse<Customer[]>>(this.urlRecent);
  }

  getCustomersOnline(): Observable<ApiResponse<Customer[]>> {
    return this._http.get<ApiResponse<Customer[]>>(this.urlOnline);
  }
}
