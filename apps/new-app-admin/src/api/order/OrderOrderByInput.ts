import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  advancePayment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dueDate?: SortOrder;
  fulfillmentDate?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  paidAmount?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
