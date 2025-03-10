/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseItemWhereUniqueInput } from "./PurchaseItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseItemUpdateInput } from "./PurchaseItemUpdateInput";

@ArgsType()
class UpdatePurchaseItemArgs {
  @ApiProperty({
    required: true,
    type: () => PurchaseItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseItemWhereUniqueInput)
  @Field(() => PurchaseItemWhereUniqueInput, { nullable: false })
  where!: PurchaseItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PurchaseItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => PurchaseItemUpdateInput)
  @Field(() => PurchaseItemUpdateInput, { nullable: false })
  data!: PurchaseItemUpdateInput;
}

export { UpdatePurchaseItemArgs as UpdatePurchaseItemArgs };
