import { SortOrder } from "../../util/SortOrder";

export type PurchaseItemOrderByInput = {
  createdAt?: SortOrder;
  demandListItemId?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  purchaseId?: SortOrder;
  purchasePrice?: SortOrder;
  quantity?: SortOrder;
  supplierProductId?: SortOrder;
  updatedAt?: SortOrder;
};
