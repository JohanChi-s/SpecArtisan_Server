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
import { ActionEventWhereInput } from "./ActionEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ActionEventOrderByInput } from "./ActionEventOrderByInput";

@ArgsType()
class ActionEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ActionEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ActionEventWhereInput, { nullable: true })
  @Type(() => ActionEventWhereInput)
  where?: ActionEventWhereInput;

  @ApiProperty({
    required: false,
    type: [ActionEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ActionEventOrderByInput], { nullable: true })
  @Type(() => ActionEventOrderByInput)
  orderBy?: Array<ActionEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ActionEventFindManyArgs as ActionEventFindManyArgs };
