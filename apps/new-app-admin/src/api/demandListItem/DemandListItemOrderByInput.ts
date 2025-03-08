import { SortOrder } from "../../util/SortOrder";

export type DemandListItemOrderByInput = {
  confirmedQuantity?: SortOrder;
  createdAt?: SortOrder;
  demandListId?: SortOrder;
  id?: SortOrder;
  orderItemId?: SortOrder;
  productId?: SortOrder;
  purchaseItemId?: SortOrder;
  requestedQuantity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
