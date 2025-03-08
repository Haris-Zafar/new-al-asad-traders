import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagsOnProductCreateInput = {
  product: ProductWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
