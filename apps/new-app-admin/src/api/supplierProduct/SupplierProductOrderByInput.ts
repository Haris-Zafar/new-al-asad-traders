import { SortOrder } from "../../util/SortOrder";

export type SupplierProductOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastPurchaseDate?: SortOrder;
  productId?: SortOrder;
  purchasePrice?: SortOrder;
  supplierId?: SortOrder;
  supplierSku?: SortOrder;
  updatedAt?: SortOrder;
};
