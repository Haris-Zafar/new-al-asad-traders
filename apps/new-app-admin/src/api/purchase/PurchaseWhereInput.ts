import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DemandListWhereUniqueInput } from "../demandList/DemandListWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseItemListRelationFilter } from "../purchaseItem/PurchaseItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { SupplierPaymentListRelationFilter } from "../supplierPayment/SupplierPaymentListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type PurchaseWhereInput = {
  createdAt?: DateTimeFilter;
  demandList?: DemandListWhereUniqueInput;
  id?: StringFilter;
  items?: PurchaseItemListRelationFilter;
  paidAmount?: FloatFilter;
  payments?: SupplierPaymentListRelationFilter;
  purchaseDate?: DateTimeFilter;
  purchaseNumber?: StringFilter;
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
