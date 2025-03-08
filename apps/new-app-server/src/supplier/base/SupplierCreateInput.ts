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
  ValidateNested,
  IsOptional,
  IsNumber,
  Max,
} from "class-validator";
import { DemandListCreateNestedManyWithoutSuppliersInput } from "./DemandListCreateNestedManyWithoutSuppliersInput";
import { Type } from "class-transformer";
import { SupplierPaymentCreateNestedManyWithoutSuppliersInput } from "./SupplierPaymentCreateNestedManyWithoutSuppliersInput";
import { PurchaseCreateNestedManyWithoutSuppliersInput } from "./PurchaseCreateNestedManyWithoutSuppliersInput";
import { SupplierProductCreateNestedManyWithoutSuppliersInput } from "./SupplierProductCreateNestedManyWithoutSuppliersInput";

@InputType()
class SupplierCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  contactPerson!: string;

  @ApiProperty({
    required: false,
    type: () => DemandListCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => DemandListCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => DemandListCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  demandLists?: DemandListCreateNestedManyWithoutSuppliersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => SupplierPaymentCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => SupplierPaymentCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => SupplierPaymentCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  payments?: SupplierPaymentCreateNestedManyWithoutSuppliersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: false,
    type: () => PurchaseCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => PurchaseCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => PurchaseCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  purchases?: PurchaseCreateNestedManyWithoutSuppliersInput;

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
  reliabilityScore?: number | null;

  @ApiProperty({
    required: false,
    type: () => SupplierProductCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => SupplierProductCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => SupplierProductCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  supplierProducts?: SupplierProductCreateNestedManyWithoutSuppliersInput;
}

export { SupplierCreateInput as SupplierCreateInput };
