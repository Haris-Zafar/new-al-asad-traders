import { DemandListCreateNestedManyWithoutSuppliersInput } from "./DemandListCreateNestedManyWithoutSuppliersInput";
import { SupplierPaymentCreateNestedManyWithoutSuppliersInput } from "./SupplierPaymentCreateNestedManyWithoutSuppliersInput";
import { PurchaseCreateNestedManyWithoutSuppliersInput } from "./PurchaseCreateNestedManyWithoutSuppliersInput";
import { SupplierProductCreateNestedManyWithoutSuppliersInput } from "./SupplierProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address: string;
  contactPerson: string;
  demandLists?: DemandListCreateNestedManyWithoutSuppliersInput;
  email: string;
  name: string;
  payments?: SupplierPaymentCreateNestedManyWithoutSuppliersInput;
  phone: string;
  purchases?: PurchaseCreateNestedManyWithoutSuppliersInput;
  reliabilityScore?: number | null;
  supplierProducts?: SupplierProductCreateNestedManyWithoutSuppliersInput;
};
