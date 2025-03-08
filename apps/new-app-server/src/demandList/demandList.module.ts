import { Module } from "@nestjs/common";
import { DemandListModuleBase } from "./base/demandList.module.base";
import { DemandListService } from "./demandList.service";
import { DemandListController } from "./demandList.controller";
import { DemandListResolver } from "./demandList.resolver";

@Module({
  imports: [DemandListModuleBase],
  controllers: [DemandListController],
  providers: [DemandListService, DemandListResolver],
  exports: [DemandListService],
})
export class DemandListModule {}
