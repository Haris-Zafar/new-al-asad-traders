import { Module } from "@nestjs/common";
import { DemandListModuleBase } from "./base/demandList.module.base";
import { DemandListService } from "./demandList.service";
import { DemandListController } from "./demandList.controller";

@Module({
  imports: [DemandListModuleBase],
  controllers: [DemandListController],
  providers: [DemandListService],
  exports: [DemandListService],
})
export class DemandListModule {}
