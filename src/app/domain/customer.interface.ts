import { Customer } from "./customer";

export interface ICustomerService {
  getCustomersRecent(): Customer[];
  getCustomersOnline(): Customer[];
}
