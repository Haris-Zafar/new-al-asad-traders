import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type CustomerPayment = {
  amount: number;
  createdAt: Date;
  customer?: Customer;
  id: string;
  notes: string | null;
  order?: Order | null;
  paymentDate: Date;
  paymentMethod?: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  reference: string | null;
  updatedAt: Date;
};
