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
} from "class-validator";
import { BuildingsWhereUniqueInput } from "../../buildings/base/BuildingsWhereUniqueInput";
import { Type } from "class-transformer";
import { ContractsUpdateManyWithoutRentHomesItemsInput } from "./ContractsUpdateManyWithoutRentHomesItemsInput";

@InputType()
class RentHomesUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => BuildingsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingsWhereUniqueInput)
  @IsOptional()
  @Field(() => BuildingsWhereUniqueInput, {
    nullable: true,
  })
  building?: BuildingsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ContractsUpdateManyWithoutRentHomesItemsInput,
  })
  @ValidateNested()
  @Type(() => ContractsUpdateManyWithoutRentHomesItemsInput)
  @IsOptional()
  @Field(() => ContractsUpdateManyWithoutRentHomesItemsInput, {
    nullable: true,
  })
  contractsItems?: ContractsUpdateManyWithoutRentHomesItemsInput;
}

export { RentHomesUpdateInput as RentHomesUpdateInput };
