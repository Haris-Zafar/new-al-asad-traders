import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagsOnProductListRelationFilter } from "../tagsOnProduct/TagsOnProductListRelationFilter";

export type TagWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  products?: TagsOnProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
