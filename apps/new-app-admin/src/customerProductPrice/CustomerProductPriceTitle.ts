import { CustomerProductPrice as TCustomerProductPrice } from "../api/customerProductPrice/CustomerProductPrice";

export const CUSTOMERPRODUCTPRICE_TITLE_FIELD = "id";

export const CustomerProductPriceTitle = (
  record: TCustomerProductPrice
): string => {
  return record.id?.toString() || String(record.id);
};
