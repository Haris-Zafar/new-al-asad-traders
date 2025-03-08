import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CustomerProductPriceUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  specialPrice?: number;
};
