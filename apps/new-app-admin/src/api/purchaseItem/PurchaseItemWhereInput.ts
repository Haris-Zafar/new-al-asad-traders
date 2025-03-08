import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DemandListItemWhereUniqueInput } from "../demandListItem/DemandListItemWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { SupplierProductWhereUniqueInput } from "../supplierProduct/SupplierProductWhereUniqueInput";

export type PurchaseItemWhereInput = {
  createdAt?: DateTimeFilter;
  demandListItem?: DemandListItemWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  purchase?: PurchaseWhereUniqueInput;
  purchasePrice?: FloatFilter;
  quantity?: IntFilter;
  supplierProduct?: SupplierProductWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
