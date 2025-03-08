import { DemandListItem } from "../demandListItem/DemandListItem";
import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  demandListItems?: Array<DemandListItem>;
  fulfilledQuantity: number;
  id: string;
  order?: Order;
  product?: Product;
  quantity: number;
  sellPrice: number;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  updatedAt: Date;
};
