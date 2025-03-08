import { Product } from "../product/Product";
import { Tag } from "../tag/Tag";

export type TagsOnProduct = {
  id: string;
  product?: Product;
  tag?: Tag;
};
