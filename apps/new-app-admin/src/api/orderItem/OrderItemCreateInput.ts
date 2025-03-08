import { DemandListItemCreateNestedManyWithoutOrderItemsInput } from "./DemandListItemCreateNestedManyWithoutOrderItemsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemCreateInput = {
  demandListItems?: DemandListItemCreateNestedManyWithoutOrderItemsInput;
  fulfilledQuantity: number;
  order: OrderWhereUniqueInput;
  product: ProductWhereUniqueInput;
  quantity: number;
  sellPrice: number;
  status: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
};
