import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnProductWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
