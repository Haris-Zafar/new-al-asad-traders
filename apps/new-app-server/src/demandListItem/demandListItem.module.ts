import { Module } from "@nestjs/common";
import { DemandListItemModuleBase } from "./base/demandListItem.module.base";
import { DemandListItemService } from "./demandListItem.service";
import { DemandListItemController } from "./demandListItem.controller";

@Module({
  imports: [DemandListItemModuleBase],
  controllers: [DemandListItemController],
  providers: [DemandListItemService],
  exports: [DemandListItemService],
})
export class DemandListItemModule {}
