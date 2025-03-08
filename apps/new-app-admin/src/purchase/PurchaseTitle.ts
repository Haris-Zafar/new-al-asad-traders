import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "purchaseNumber";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.purchaseNumber?.toString() || String(record.id);
};
