import { CustomerProductPrice } from "../customerProductPrice/CustomerProductPrice";
import { Order } from "../order/Order";
import { CustomerPayment } from "../customerPayment/CustomerPayment";

export type Customer = {
  address: string;
  contactPerson: string;
  createdAt: Date;
  customPrices?: Array<CustomerProductPrice>;
  email: string;
  id: string;
  name: string;
  orders?: Array<Order>;
  outstandingBalance: number;
  payments?: Array<CustomerPayment>;
  phone: string;
  totalPurchases: number;
  updatedAt: Date;
};
