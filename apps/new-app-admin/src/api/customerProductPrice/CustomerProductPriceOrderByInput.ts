import { SortOrder } from "../../util/SortOrder";

export type CustomerProductPriceOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  specialPrice?: SortOrder;
  updatedAt?: SortOrder;
};
