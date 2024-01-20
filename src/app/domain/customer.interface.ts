import { Observable } from 'rxjs';
import { ApiResponse, Customer } from "./customer";

export interface ICustomerService {
  getCustomersRecent(): Observable<ApiResponse<Customer[]>>;
  getCustomersOnline(): Observable<ApiResponse<Customer[]>>;
}
