import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnProductUpdateInput = {
  product?: ProductWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
