import { TagsOnProduct } from "../tagsOnProduct/TagsOnProduct";

export type Tag = {
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<TagsOnProduct>;
  updatedAt: Date;
};
