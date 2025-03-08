import { DemandList } from "../demandList/DemandList";
import { PurchaseItem } from "../purchaseItem/PurchaseItem";
import { SupplierPayment } from "../supplierPayment/SupplierPayment";
import { Supplier } from "../supplier/Supplier";

export type Purchase = {
  createdAt: Date;
  demandList?: DemandList;
  id: string;
  items?: Array<PurchaseItem>;
  paidAmount: number;
  payments?: Array<SupplierPayment>;
  purchaseDate: Date;
  purchaseNumber: string;
  supplier?: Supplier;
  totalAmount: number;
  updatedAt: Date;
};
