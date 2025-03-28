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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { DemandListItemListRelationFilter } from "../../demandListItem/base/DemandListItemListRelationFilter";
import { PurchaseWhereUniqueInput } from "../../purchase/base/PurchaseWhereUniqueInput";
import { EnumDemandListStatus } from "./EnumDemandListStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class DemandListWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  demandDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  estimatedCost?: FloatFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => DemandListItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DemandListItemListRelationFilter)
  @IsOptional()
  @Field(() => DemandListItemListRelationFilter, {
    nullable: true,
  })
  items?: DemandListItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseWhereUniqueInput, {
    nullable: true,
  })
  purchase?: PurchaseWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumDemandListStatus,
  })
  @IsEnum(EnumDemandListStatus)
  @IsOptional()
  @Field(() => EnumDemandListStatus, {
    nullable: true,
  })
  status?:
    | "DRAFT"
    | "SUBMITTED"
    | "CONFIRMED"
    | "PARTIAL"
    | "COMPLETE"
    | "CANCELLED";

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { DemandListWhereInput as DemandListWhereInput };
