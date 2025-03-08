import { DemandList } from "../demandList/DemandList";
import { OrderItem } from "../orderItem/OrderItem";
import { Product } from "../product/Product";
import { PurchaseItem } from "../purchaseItem/PurchaseItem";

export type DemandListItem = {
  confirmedQuantity: number | null;
  createdAt: Date;
  demandList?: DemandList;
  id: string;
  orderItem?: OrderItem | null;
  product?: Product;
  purchaseItem?: PurchaseItem | null;
  requestedQuantity: number;
  status?:
    | "PENDING"
    | "CONFIRMED"
    | "UNAVAILABLE"
    | "TRANSFERRED"
    | "PURCHASED"
    | "CANCELLED";
  updatedAt: Date;
};
