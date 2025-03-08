import { TagsOnProductWhereInput } from "./TagsOnProductWhereInput";
import { TagsOnProductOrderByInput } from "./TagsOnProductOrderByInput";

export type TagsOnProductFindManyArgs = {
  where?: TagsOnProductWhereInput;
  orderBy?: Array<TagsOnProductOrderByInput>;
  skip?: number;
  take?: number;
};
