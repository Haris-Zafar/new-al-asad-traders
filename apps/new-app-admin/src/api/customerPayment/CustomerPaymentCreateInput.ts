import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CustomerPaymentCreateInput = {
  amount: number;
  customer: CustomerWhereUniqueInput;
  notes?: string | null;
  order?: OrderWhereUniqueInput | null;
  paymentMethod: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  reference?: string | null;
};
