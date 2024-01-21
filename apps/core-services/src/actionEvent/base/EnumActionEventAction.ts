/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Comment } from "../../comment/base/Comment";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumActionEventAction {
  Download = "Download",
  Upload = "Upload",
  Edit = "Edit",
  Delete = "Delete",
  AddRole = "AddRole",
  RemoveRole = "RemoveRole",
  Duplicate = "Duplicate",
  Comment = "Comment",
  Share = "Share",
  Assign = "Assign",
  Star = "Star",
  Public = "Public",
  Private = "Private",
}

registerEnumType(EnumActionEventAction, {
  name: "EnumActionEventAction",
});