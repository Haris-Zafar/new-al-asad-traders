import { DemandListItem } from "../demandListItem/DemandListItem";
import { Purchase } from "../purchase/Purchase";
import { Supplier } from "../supplier/Supplier";

export type DemandList = {
  createdAt: Date;
  demandDate: Date;
  estimatedCost: number;
  id: string;
  items?: Array<DemandListItem>;
  purchase?: Purchase | null;
  status?:
    | "DRAFT"
    | "SUBMITTED"
    | "CONFIRMED"
    | "PARTIAL"
    | "COMPLETE"
    | "CANCELLED";
  supplier?: Supplier;
  updatedAt: Date;
};
