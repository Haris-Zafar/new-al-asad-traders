import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DemandListWhereUniqueInput } from "../demandList/DemandListWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseItemWhereUniqueInput } from "../purchaseItem/PurchaseItemWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type DemandListItemWhereInput = {
  confirmedQuantity?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  demandList?: DemandListWhereUniqueInput;
  id?: StringFilter;
  orderItem?: OrderItemWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  purchaseItem?: PurchaseItemWhereUniqueInput;
  requestedQuantity?: IntFilter;
  status?:
    | "PENDING"
    | "CONFIRMED"
    | "UNAVAILABLE"
    | "TRANSFERRED"
    | "PURCHASED"
    | "CANCELLED";
  updatedAt?: DateTimeFilter;
};
