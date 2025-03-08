import { SortOrder } from "../../util/SortOrder";

export type CustomerPaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  orderId?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  reference?: SortOrder;
  updatedAt?: SortOrder;
};
