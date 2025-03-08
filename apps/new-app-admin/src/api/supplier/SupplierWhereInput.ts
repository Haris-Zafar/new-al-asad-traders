import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DemandListListRelationFilter } from "../demandList/DemandListListRelationFilter";
import { SupplierPaymentListRelationFilter } from "../supplierPayment/SupplierPaymentListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupplierProductListRelationFilter } from "../supplierProduct/SupplierProductListRelationFilter";

export type SupplierWhereInput = {
  address?: StringFilter;
  contactPerson?: StringFilter;
  createdAt?: DateTimeFilter;
  demandLists?: DemandListListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  payments?: SupplierPaymentListRelationFilter;
  phone?: StringFilter;
  purchases?: PurchaseListRelationFilter;
  reliabilityScore?: FloatNullableFilter;
  supplierProducts?: SupplierProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
