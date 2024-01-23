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
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";
import { Type } from "class-transformer";
import { WorkspaceCreateNestedManyWithoutTeamsInput } from "./WorkspaceCreateNestedManyWithoutTeamsInput";

@InputType()
class TeamCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatarUrl?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  canComment?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  canShare?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  defaultUserRole?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  inviteRequired?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
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
  subDomain?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  theme?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => WorkspaceCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => WorkspaceCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => WorkspaceCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  workspaces?: WorkspaceCreateNestedManyWithoutTeamsInput;
}

export { TeamCreateInput as TeamCreateInput };