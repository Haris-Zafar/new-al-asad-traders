import { SortOrder } from "../../util/SortOrder";

export type SupplierPaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  purchaseId?: SortOrder;
  reference?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
