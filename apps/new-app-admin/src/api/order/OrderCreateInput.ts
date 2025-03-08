import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { CustomerPaymentCreateNestedManyWithoutOrdersInput } from "./CustomerPaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  advancePayment: number;
  customer: CustomerWhereUniqueInput;
  dueDate?: Date | null;
  fulfillmentDate?: Date | null;
  items?: OrderItemCreateNestedManyWithoutOrdersInput;
  orderNumber: string;
  paidAmount: number;
  payments?: CustomerPaymentCreateNestedManyWithoutOrdersInput;
  status: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  totalAmount: number;
};
