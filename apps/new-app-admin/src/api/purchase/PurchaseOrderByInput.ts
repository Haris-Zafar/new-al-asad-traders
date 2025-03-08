import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  createdAt?: SortOrder;
  demandListId?: SortOrder;
  id?: SortOrder;
  paidAmount?: SortOrder;
  purchaseDate?: SortOrder;
  purchaseNumber?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
