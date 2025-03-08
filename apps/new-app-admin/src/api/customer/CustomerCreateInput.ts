import { CustomerProductPriceCreateNestedManyWithoutCustomersInput } from "./CustomerProductPriceCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { CustomerPaymentCreateNestedManyWithoutCustomersInput } from "./CustomerPaymentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address: string;
  contactPerson: string;
  customPrices?: CustomerProductPriceCreateNestedManyWithoutCustomersInput;
  email: string;
  name: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  outstandingBalance: number;
  payments?: CustomerPaymentCreateNestedManyWithoutCustomersInput;
  phone: string;
  totalPurchases: number;
};
