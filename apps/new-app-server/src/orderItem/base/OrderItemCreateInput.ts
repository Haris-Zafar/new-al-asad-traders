/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DemandListItemCreateNestedManyWithoutOrderItemsInput } from "./DemandListItemCreateNestedManyWithoutOrderItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Max,
  IsNumber,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { EnumOrderItemStatus } from "./EnumOrderItemStatus";

@InputType()
class OrderItemCreateInput {
  @ApiProperty({
    required: false,
    type: () => DemandListItemCreateNestedManyWithoutOrderItemsInput,
  })
  @ValidateNested()
  @Type(() => DemandListItemCreateNestedManyWithoutOrderItemsInput)
  @IsOptional()
  @Field(() => DemandListItemCreateNestedManyWithoutOrderItemsInput, {
    nullable: true,
  })
  demandListItems?: DemandListItemCreateNestedManyWithoutOrderItemsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  fulfilledQuantity!: number;

  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput)
  order!: OrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput)
  product!: ProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  quantity!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  sellPrice!: number;

  @ApiProperty({
    required: true,
    enum: EnumOrderItemStatus,
  })
  @IsEnum(EnumOrderItemStatus)
  @Field(() => EnumOrderItemStatus)
  status!: "PENDING" | "PARTIAL" | "COMPLETE" | "CANCELLED";
}

export { OrderItemCreateInput as OrderItemCreateInput };
