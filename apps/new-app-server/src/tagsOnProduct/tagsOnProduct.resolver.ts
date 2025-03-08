import * as graphql from "@nestjs/graphql";
import { TagsOnProductResolverBase } from "./base/tagsOnProduct.resolver.base";
import { TagsOnProduct } from "./base/TagsOnProduct";
import { TagsOnProductService } from "./tagsOnProduct.service";

@graphql.Resolver(() => TagsOnProduct)
export class TagsOnProductResolver extends TagsOnProductResolverBase {
  constructor(protected readonly service: TagsOnProductService) {
    super(service);
  }
}
