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
import { WorkspaceCreateInput } from "./WorkspaceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateWorkspaceArgs {
  @ApiProperty({
    required: true,
    type: () => WorkspaceCreateInput,
  })
  @ValidateNested()
  @Type(() => WorkspaceCreateInput)
  @Field(() => WorkspaceCreateInput, { nullable: false })
  data!: WorkspaceCreateInput;
}

export { CreateWorkspaceArgs as CreateWorkspaceArgs };