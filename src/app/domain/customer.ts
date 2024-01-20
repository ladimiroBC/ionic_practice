export interface ApiResponse<T> {
  message?: string;
  customer_recent: T;
}

export interface Customer {
  name?: string;
  state?: string;
  description?: string;
  image?: string;
}
