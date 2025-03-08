import { DemandListItem as TDemandListItem } from "../api/demandListItem/DemandListItem";

export const DEMANDLISTITEM_TITLE_FIELD = "id";

export const DemandListItemTitle = (record: TDemandListItem): string => {
  return record.id?.toString() || String(record.id);
};
