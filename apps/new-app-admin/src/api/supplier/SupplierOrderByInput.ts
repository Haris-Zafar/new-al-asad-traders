import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  address?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  reliabilityScore?: SortOrder;
  updatedAt?: SortOrder;
};
