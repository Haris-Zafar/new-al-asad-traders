import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseItemUpdateManyWithoutSupplierProductsInput } from "./PurchaseItemUpdateManyWithoutSupplierProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplierProductUpdateInput = {
  availability?: boolean;
  lastPurchaseDate?: Date | null;
  product?: ProductWhereUniqueInput;
  purchaseItems?: PurchaseItemUpdateManyWithoutSupplierProductsInput;
  purchasePrice?: number;
  supplier?: SupplierWhereUniqueInput;
  supplierSku?: string | null;
};
