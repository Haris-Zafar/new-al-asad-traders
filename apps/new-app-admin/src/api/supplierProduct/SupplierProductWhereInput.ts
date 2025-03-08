import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseItemListRelationFilter } from "../purchaseItem/PurchaseItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupplierProductWhereInput = {
  availability?: BooleanFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  lastPurchaseDate?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  purchaseItems?: PurchaseItemListRelationFilter;
  purchasePrice?: FloatFilter;
  supplier?: SupplierWhereUniqueInput;
  supplierSku?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
