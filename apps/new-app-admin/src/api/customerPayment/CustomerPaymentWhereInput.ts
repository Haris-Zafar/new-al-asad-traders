import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CustomerPaymentWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  paymentDate?: DateTimeFilter;
  paymentMethod?: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  reference?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
