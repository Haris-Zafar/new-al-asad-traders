import { TagsOnProductCreateNestedManyWithoutTagsInput } from "./TagsOnProductCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name: string;
  products?: TagsOnProductCreateNestedManyWithoutTagsInput;
};
