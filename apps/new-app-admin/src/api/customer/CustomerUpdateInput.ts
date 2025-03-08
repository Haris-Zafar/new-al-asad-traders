import { CustomerProductPriceUpdateManyWithoutCustomersInput } from "./CustomerProductPriceUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { CustomerPaymentUpdateManyWithoutCustomersInput } from "./CustomerPaymentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string;
  contactPerson?: string;
  customPrices?: CustomerProductPriceUpdateManyWithoutCustomersInput;
  email?: string;
  name?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
  outstandingBalance?: number;
  payments?: CustomerPaymentUpdateManyWithoutCustomersInput;
  phone?: string;
  totalPurchases?: number;
};
