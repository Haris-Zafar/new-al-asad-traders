import { Module } from "@nestjs/common";
import { PurchaseModuleBase } from "./base/purchase.module.base";
import { PurchaseService } from "./purchase.service";
import { PurchaseController } from "./purchase.controller";

@Module({
  imports: [PurchaseModuleBase],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
