import { DemandList } from "../demandList/DemandList";
import { SupplierPayment } from "../supplierPayment/SupplierPayment";
import { Purchase } from "../purchase/Purchase";
import { SupplierProduct } from "../supplierProduct/SupplierProduct";

export type Supplier = {
  address: string;
  contactPerson: string;
  createdAt: Date;
  demandLists?: Array<DemandList>;
  email: string;
  id: string;
  name: string;
  payments?: Array<SupplierPayment>;
  phone: string;
  purchases?: Array<Purchase>;
  reliabilityScore: number | null;
  supplierProducts?: Array<SupplierProduct>;
  updatedAt: Date;
};
