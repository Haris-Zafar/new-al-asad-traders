import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseItemCreateNestedManyWithoutSupplierProductsInput } from "./PurchaseItemCreateNestedManyWithoutSupplierProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplierProductCreateInput = {
  availability: boolean;
  lastPurchaseDate?: Date | null;
  product: ProductWhereUniqueInput;
  purchaseItems?: PurchaseItemCreateNestedManyWithoutSupplierProductsInput;
  purchasePrice: number;
  supplier: SupplierWhereUniqueInput;
  supplierSku?: string | null;
};
