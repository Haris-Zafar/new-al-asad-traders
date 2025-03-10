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
import { CustomerProductPriceWhereInput } from "./CustomerProductPriceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerProductPriceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceWhereInput)
  @IsOptional()
  @Field(() => CustomerProductPriceWhereInput, {
    nullable: true,
  })
  every?: CustomerProductPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceWhereInput)
  @IsOptional()
  @Field(() => CustomerProductPriceWhereInput, {
    nullable: true,
  })
  some?: CustomerProductPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceWhereInput)
  @IsOptional()
  @Field(() => CustomerProductPriceWhereInput, {
    nullable: true,
  })
  none?: CustomerProductPriceWhereInput;
}
export { CustomerProductPriceListRelationFilter as CustomerProductPriceListRelationFilter };
