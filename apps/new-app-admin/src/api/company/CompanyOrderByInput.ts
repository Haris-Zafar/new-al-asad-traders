import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  address?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
