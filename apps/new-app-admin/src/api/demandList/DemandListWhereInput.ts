import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { DemandListItemListRelationFilter } from "../demandListItem/DemandListItemListRelationFilter";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DemandListWhereInput = {
  createdAt?: DateTimeFilter;
  demandDate?: DateTimeFilter;
  estimatedCost?: FloatFilter;
  id?: StringFilter;
  items?: DemandListItemListRelationFilter;
  purchase?: PurchaseWhereUniqueInput;
  status?:
    | "DRAFT"
    | "SUBMITTED"
    | "CONFIRMED"
    | "PARTIAL"
    | "COMPLETE"
    | "CANCELLED";
  supplier?: SupplierWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
