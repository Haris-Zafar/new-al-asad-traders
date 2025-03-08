import { DemandListItemUpdateManyWithoutOrderItemsInput } from "./DemandListItemUpdateManyWithoutOrderItemsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  demandListItems?: DemandListItemUpdateManyWithoutOrderItemsInput;
  fulfilledQuantity?: number;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  quantity?: number;
  sellPrice?: number;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
};
