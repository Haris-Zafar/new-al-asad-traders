import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  products?: ProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
