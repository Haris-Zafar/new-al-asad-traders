import { Module } from "@nestjs/common";
import { PurchaseItemModuleBase } from "./base/purchaseItem.module.base";
import { PurchaseItemService } from "./purchaseItem.service";
import { PurchaseItemController } from "./purchaseItem.controller";

@Module({
  imports: [PurchaseItemModuleBase],
  controllers: [PurchaseItemController],
  providers: [PurchaseItemService],
  exports: [PurchaseItemService],
})
export class PurchaseItemModule {}
