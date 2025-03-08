import { Product } from "../product/Product";
import { PurchaseItem } from "../purchaseItem/PurchaseItem";
import { Supplier } from "../supplier/Supplier";

export type SupplierProduct = {
  availability: boolean;
  createdAt: Date;
  id: string;
  lastPurchaseDate: Date | null;
  product?: Product;
  purchaseItems?: Array<PurchaseItem>;
  purchasePrice: number;
  supplier?: Supplier;
  supplierSku: string | null;
  updatedAt: Date;
};
