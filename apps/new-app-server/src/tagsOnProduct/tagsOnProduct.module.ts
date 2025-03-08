import { Module } from "@nestjs/common";
import { TagsOnProductModuleBase } from "./base/tagsOnProduct.module.base";
import { TagsOnProductService } from "./tagsOnProduct.service";
import { TagsOnProductController } from "./tagsOnProduct.controller";

@Module({
  imports: [TagsOnProductModuleBase],
  controllers: [TagsOnProductController],
  providers: [TagsOnProductService],
  exports: [TagsOnProductService],
})
export class TagsOnProductModule {}
