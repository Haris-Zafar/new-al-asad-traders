import { DemandListItemCreateNestedManyWithoutDemandListsInput } from "./DemandListItemCreateNestedManyWithoutDemandListsInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DemandListCreateInput = {
  estimatedCost: number;
  items?: DemandListItemCreateNestedManyWithoutDemandListsInput;
  purchase?: PurchaseWhereUniqueInput | null;
  status:
    | "DRAFT"
    | "SUBMITTED"
    | "CONFIRMED"
    | "PARTIAL"
    | "COMPLETE"
    | "CANCELLED";
  supplier: SupplierWhereUniqueInput;
};
