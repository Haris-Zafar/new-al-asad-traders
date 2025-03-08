import { SortOrder } from "../../util/SortOrder";

export type DemandListOrderByInput = {
  createdAt?: SortOrder;
  demandDate?: SortOrder;
  estimatedCost?: SortOrder;
  id?: SortOrder;
  purchaseId?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
