/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PurchaseItemWhereUniqueInput } from "../../purchaseItem/base/PurchaseItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PurchaseItemCreateNestedManyWithoutSupplierProductsInput {
  @Field(() => [PurchaseItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseItemWhereUniqueInput],
  })
  connect?: Array<PurchaseItemWhereUniqueInput>;
}

export { PurchaseItemCreateNestedManyWithoutSupplierProductsInput as PurchaseItemCreateNestedManyWithoutSupplierProductsInput };
