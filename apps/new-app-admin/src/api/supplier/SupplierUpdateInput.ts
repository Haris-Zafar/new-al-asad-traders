import { DemandListUpdateManyWithoutSuppliersInput } from "./DemandListUpdateManyWithoutSuppliersInput";
import { SupplierPaymentUpdateManyWithoutSuppliersInput } from "./SupplierPaymentUpdateManyWithoutSuppliersInput";
import { PurchaseUpdateManyWithoutSuppliersInput } from "./PurchaseUpdateManyWithoutSuppliersInput";
import { SupplierProductUpdateManyWithoutSuppliersInput } from "./SupplierProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string;
  contactPerson?: string;
  demandLists?: DemandListUpdateManyWithoutSuppliersInput;
  email?: string;
  name?: string;
  payments?: SupplierPaymentUpdateManyWithoutSuppliersInput;
  phone?: string;
  purchases?: PurchaseUpdateManyWithoutSuppliersInput;
  reliabilityScore?: number | null;
  supplierProducts?: SupplierProductUpdateManyWithoutSuppliersInput;
};
