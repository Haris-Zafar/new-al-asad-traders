import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerProductPriceListRelationFilter } from "../customerProductPrice/CustomerProductPriceListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { CustomerPaymentListRelationFilter } from "../customerPayment/CustomerPaymentListRelationFilter";

export type CustomerWhereInput = {
  address?: StringFilter;
  contactPerson?: StringFilter;
  createdAt?: DateTimeFilter;
  customPrices?: CustomerProductPriceListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  outstandingBalance?: FloatFilter;
  payments?: CustomerPaymentListRelationFilter;
  phone?: StringFilter;
  totalPurchases?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
