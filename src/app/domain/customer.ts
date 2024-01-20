export interface ApiResponse<T> {
  message?: string;
  customers_recent: T;
  customers_online: T;
}

export interface Customer {
  name?: string;
  state?: string;
  description?: string;
  image?: string;
}
