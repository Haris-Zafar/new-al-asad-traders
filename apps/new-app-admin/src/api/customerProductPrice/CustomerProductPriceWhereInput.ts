import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type CustomerProductPriceWhereInput = {
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  specialPrice?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
