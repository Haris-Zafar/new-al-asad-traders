import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomerProductPriceCreateInput = {
  customer: CustomerWhereUniqueInput;
  product: ProductWhereUniqueInput;
  specialPrice: number;
};
