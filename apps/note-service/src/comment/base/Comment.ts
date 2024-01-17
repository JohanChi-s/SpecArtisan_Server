/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Document } from "../../document/base/Document";
import { Position } from "../../position/base/Position";
import { EnumCommentStatus } from "./EnumCommentStatus";

@ObjectType()
class Comment {
  @ApiProperty({
    required: false,
    type: () => [Comment],
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  comments?: Array<Comment>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Document,
  })
  @ValidateNested()
  @Type(() => Document)
  @IsOptional()
  document?: Document | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Comment,
  })
  @ValidateNested()
  @Type(() => Comment)
  @IsOptional()
  parentCommentId?: Comment | null;

  @ApiProperty({
    required: false,
    type: () => Position,
  })
  @ValidateNested()
  @Type(() => Position)
  @IsOptional()
  position?: Position | null;

  @ApiProperty({
    required: false,
    enum: EnumCommentStatus,
  })
  @IsEnum(EnumCommentStatus)
  @IsOptional()
  @Field(() => EnumCommentStatus, {
    nullable: true,
  })
  status?: "Done" | "Todo" | "Doing" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userId!: string;
}

export { Comment as Comment };
