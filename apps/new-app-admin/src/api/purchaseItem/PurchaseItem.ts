import { DemandListItem } from "../demandListItem/DemandListItem";
import { Product } from "../product/Product";
import { Purchase } from "../purchase/Purchase";
import { SupplierProduct } from "../supplierProduct/SupplierProduct";

export type PurchaseItem = {
  createdAt: Date;
  demandListItem?: DemandListItem;
  id: string;
  product?: Product;
  purchase?: Purchase;
  purchasePrice: number;
  quantity: number;
  supplierProduct?: SupplierProduct;
  updatedAt: Date;
};
