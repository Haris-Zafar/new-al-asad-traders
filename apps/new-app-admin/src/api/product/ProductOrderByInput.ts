import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  purchasePrice?: SortOrder;
  reorderLevel?: SortOrder;
  retailPrice?: SortOrder;
  sellPrice?: SortOrder;
  size?: SortOrder;
  sku?: SortOrder;
  stockQuantity?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
  weightUnit?: SortOrder;
};
