import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DemandListItemListRelationFilter } from "../demandListItem/DemandListItemListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type OrderItemWhereInput = {
  createdAt?: DateTimeFilter;
  demandListItems?: DemandListItemListRelationFilter;
  fulfilledQuantity?: IntFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  quantity?: IntFilter;
  sellPrice?: FloatFilter;
  status?: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
  updatedAt?: DateTimeFilter;
};
