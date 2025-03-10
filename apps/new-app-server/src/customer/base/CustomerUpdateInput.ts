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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsNumber,
  Max,
} from "class-validator";
import { CustomerProductPriceUpdateManyWithoutCustomersInput } from "./CustomerProductPriceUpdateManyWithoutCustomersInput";
import { Type } from "class-transformer";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { CustomerPaymentUpdateManyWithoutCustomersInput } from "./CustomerPaymentUpdateManyWithoutCustomersInput";

@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactPerson?: string;

  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CustomerProductPriceUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  customPrices?: CustomerProductPriceUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  outstandingBalance?: number;

  @ApiProperty({
    required: false,
    type: () => CustomerPaymentUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CustomerPaymentUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CustomerPaymentUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  payments?: CustomerPaymentUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPurchases?: number;
}

export { CustomerUpdateInput as CustomerUpdateInput };
