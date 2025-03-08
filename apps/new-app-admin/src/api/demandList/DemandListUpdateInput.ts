import { DemandListItemUpdateManyWithoutDemandListsInput } from "./DemandListItemUpdateManyWithoutDemandListsInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DemandListUpdateInput = {
  estimatedCost?: number;
  items?: DemandListItemUpdateManyWithoutDemandListsInput;
  purchase?: PurchaseWhereUniqueInput | null;
  status?:
    | "DRAFT"
    | "SUBMITTED"
    | "CONFIRMED"
    | "PARTIAL"
    | "COMPLETE"
    | "CANCELLED";
  supplier?: SupplierWhereUniqueInput;
};
