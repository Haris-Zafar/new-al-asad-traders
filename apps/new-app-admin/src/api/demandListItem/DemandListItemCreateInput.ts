import { DemandListWhereUniqueInput } from "../demandList/DemandListWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseItemWhereUniqueInput } from "../purchaseItem/PurchaseItemWhereUniqueInput";

export type DemandListItemCreateInput = {
  confirmedQuantity?: number | null;
  demandList: DemandListWhereUniqueInput;
  orderItem?: OrderItemWhereUniqueInput | null;
  product: ProductWhereUniqueInput;
  purchaseItem?: PurchaseItemWhereUniqueInput | null;
  requestedQuantity: number;
  status:
    | "PENDING"
    | "CONFIRMED"
    | "UNAVAILABLE"
    | "TRANSFERRED"
    | "PURCHASED"
    | "CANCELLED";
};
