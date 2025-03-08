import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  outstandingBalance?: SortOrder;
  phone?: SortOrder;
  totalPurchases?: SortOrder;
  updatedAt?: SortOrder;
};
