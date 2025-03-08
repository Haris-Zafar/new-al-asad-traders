import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
