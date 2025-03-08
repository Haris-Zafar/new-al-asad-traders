import { DemandListItemWhereUniqueInput } from "../demandListItem/DemandListItemWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierProductWhereUniqueInput } from "../supplierProduct/SupplierProductWhereUniqueInput";

export type PurchaseItemCreateInput = {
  demandListItem: DemandListItemWhereUniqueInput;
  product: ProductWhereUniqueInput;
  purchase: PurchaseWhereUniqueInput;
  purchasePrice: number;
  quantity: number;
  supplierProduct: SupplierProductWhereUniqueInput;
};
