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
import { ContractsCreateNestedManyWithoutResidentsItemsInput } from "./ContractsCreateNestedManyWithoutResidentsItemsInput";
import { Type } from "class-transformer";

@InputType()
class ResidentsCreateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ContractsCreateNestedManyWithoutResidentsItemsInput,
  })
  @ValidateNested()
  @Type(() => ContractsCreateNestedManyWithoutResidentsItemsInput)
  @IsOptional()
  @Field(() => ContractsCreateNestedManyWithoutResidentsItemsInput, {
    nullable: true,
  })
  contractsItems?: ContractsCreateNestedManyWithoutResidentsItemsInput;
}

export { ResidentsCreateInput as ResidentsCreateInput };
