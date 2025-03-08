import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplierPaymentWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  paymentDate?: DateTimeFilter;
  paymentMethod?: "CASH" | "BANK_TRANSFER" | "CHECK" | "CREDIT" | "OTHER";
  purchase?: PurchaseWhereUniqueInput;
  reference?: StringNullableFilter;
  supplier?: SupplierWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
