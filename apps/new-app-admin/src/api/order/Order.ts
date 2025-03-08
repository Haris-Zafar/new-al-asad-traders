import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { CustomerPayment } from "../customerPayment/CustomerPayment";

export type Order = {
  advancePayment: number;
  createdAt: Date;
  customer?: Customer;
  dueDate: Date | null;
  fulfillmentDate: Date | null;
  id: string;
  items?: Array<OrderItem>;
  orderDate: Date;
  orderNumber: string;
  paidAmount: number;
  payments?: Array<CustomerPayment>;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  totalAmount: number;
  updatedAt: Date;
};
