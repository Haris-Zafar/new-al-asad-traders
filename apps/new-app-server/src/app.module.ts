import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { TagModule } from "./tag/tag.module";
import { TagsOnProductModule } from "./tagsOnProduct/tagsOnProduct.module";
import { CompanyModule } from "./company/company.module";
import { SupplierModule } from "./supplier/supplier.module";
import { SupplierProductModule } from "./supplierProduct/supplierProduct.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomerProductPriceModule } from "./customerProductPrice/customerProductPrice.module";
import { OrderModule } from "./order/order.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { DemandListModule } from "./demandList/demandList.module";
import { DemandListItemModule } from "./demandListItem/demandListItem.module";
import { PurchaseModule } from "./purchase/purchase.module";
import { PurchaseItemModule } from "./purchaseItem/purchaseItem.module";
import { SupplierPaymentModule } from "./supplierPayment/supplierPayment.module";
import { CustomerPaymentModule } from "./customerPayment/customerPayment.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    ProductModule,
    CategoryModule,
    TagModule,
    TagsOnProductModule,
    CompanyModule,
    SupplierModule,
    SupplierProductModule,
    CustomerModule,
    CustomerProductPriceModule,
    OrderModule,
    OrderItemModule,
    DemandListModule,
    DemandListItemModule,
    PurchaseModule,
    PurchaseItemModule,
    SupplierPaymentModule,
    CustomerPaymentModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
