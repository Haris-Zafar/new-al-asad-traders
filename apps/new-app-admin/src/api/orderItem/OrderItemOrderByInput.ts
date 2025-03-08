import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  fulfilledQuantity?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  sellPrice?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
