import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { CustomerPaymentListRelationFilter } from "../customerPayment/CustomerPaymentListRelationFilter";

export type OrderWhereInput = {
  advancePayment?: FloatFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  fulfillmentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  items?: OrderItemListRelationFilter;
  orderDate?: DateTimeFilter;
  orderNumber?: StringFilter;
  paidAmount?: FloatFilter;
  payments?: CustomerPaymentListRelationFilter;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  totalAmount?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
