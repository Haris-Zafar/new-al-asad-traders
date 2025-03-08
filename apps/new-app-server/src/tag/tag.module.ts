import { Module } from "@nestjs/common";
import { TagModuleBase } from "./base/tag.module.base";
import { TagService } from "./tag.service";
import { TagController } from "./tag.controller";

@Module({
  imports: [TagModuleBase],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}
