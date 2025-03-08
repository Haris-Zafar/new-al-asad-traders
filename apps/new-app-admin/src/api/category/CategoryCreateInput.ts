import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name: string;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
