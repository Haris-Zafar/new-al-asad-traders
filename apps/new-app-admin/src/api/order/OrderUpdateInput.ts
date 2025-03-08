import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { CustomerPaymentUpdateManyWithoutOrdersInput } from "./CustomerPaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  advancePayment?: number;
  customer?: CustomerWhereUniqueInput;
  dueDate?: Date | null;
  fulfillmentDate?: Date | null;
  items?: OrderItemUpdateManyWithoutOrdersInput;
  orderNumber?: string;
  paidAmount?: number;
  payments?: CustomerPaymentUpdateManyWithoutOrdersInput;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  totalAmount?: number;
};
