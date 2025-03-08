import { Module } from "@nestjs/common";
import { DemandListItemModuleBase } from "./base/demandListItem.module.base";
import { DemandListItemService } from "./demandListItem.service";
import { DemandListItemController } from "./demandListItem.controller";
import { DemandListItemResolver } from "./demandListItem.resolver";

@Module({
  imports: [DemandListItemModuleBase],
  controllers: [DemandListItemController],
  providers: [DemandListItemService, DemandListItemResolver],
  exports: [DemandListItemService],
})
export class DemandListItemModule {}
