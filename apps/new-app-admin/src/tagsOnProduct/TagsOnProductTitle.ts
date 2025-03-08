import { TagsOnProduct as TTagsOnProduct } from "../api/tagsOnProduct/TagsOnProduct";

export const TAGSONPRODUCT_TITLE_FIELD = "id";

export const TagsOnProductTitle = (record: TTagsOnProduct): string => {
  return record.id?.toString() || String(record.id);
};
