import { Module } from "@nestjs/common";
import { TagsOnProductModuleBase } from "./base/tagsOnProduct.module.base";
import { TagsOnProductService } from "./tagsOnProduct.service";
import { TagsOnProductController } from "./tagsOnProduct.controller";
import { TagsOnProductResolver } from "./tagsOnProduct.resolver";

@Module({
  imports: [TagsOnProductModuleBase],
  controllers: [TagsOnProductController],
  providers: [TagsOnProductService, TagsOnProductResolver],
  exports: [TagsOnProductService],
})
export class TagsOnProductModule {}
