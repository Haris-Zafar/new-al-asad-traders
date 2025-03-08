import { DemandList as TDemandList } from "../api/demandList/DemandList";

export const DEMANDLIST_TITLE_FIELD = "id";

export const DemandListTitle = (record: TDemandList): string => {
  return record.id?.toString() || String(record.id);
};
