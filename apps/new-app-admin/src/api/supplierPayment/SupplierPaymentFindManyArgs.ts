import { SupplierPaymentWhereInput } from "./SupplierPaymentWhereInput";
import { SupplierPaymentOrderByInput } from "./SupplierPaymentOrderByInput";

export type SupplierPaymentFindManyArgs = {
  where?: SupplierPaymentWhereInput;
  orderBy?: Array<SupplierPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
