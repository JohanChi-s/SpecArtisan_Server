/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Collection } from "./Collection";
import { CollectionCountArgs } from "./CollectionCountArgs";
import { CollectionFindManyArgs } from "./CollectionFindManyArgs";
import { CollectionFindUniqueArgs } from "./CollectionFindUniqueArgs";
import { CreateCollectionArgs } from "./CreateCollectionArgs";
import { UpdateCollectionArgs } from "./UpdateCollectionArgs";
import { DeleteCollectionArgs } from "./DeleteCollectionArgs";
import { ActionEventFindManyArgs } from "../../actionEvent/base/ActionEventFindManyArgs";
import { ActionEvent } from "../../actionEvent/base/ActionEvent";
import { ArchivedFindManyArgs } from "../../archived/base/ArchivedFindManyArgs";
import { Archived } from "../../archived/base/Archived";
import { MemberFindManyArgs } from "../../member/base/MemberFindManyArgs";
import { Member } from "../../member/base/Member";
import { CollectionService } from "../collection.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Collection)
export class CollectionResolverBase {
  constructor(
    protected readonly service: CollectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "read",
    possession: "any",
  })
  async _collectionsMeta(
    @graphql.Args() args: CollectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Collection])
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "read",
    possession: "any",
  })
  async collections(
    @graphql.Args() args: CollectionFindManyArgs
  ): Promise<Collection[]> {
    return this.service.collections(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Collection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "read",
    possession: "own",
  })
  async collection(
    @graphql.Args() args: CollectionFindUniqueArgs
  ): Promise<Collection | null> {
    const result = await this.service.collection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Collection)
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "create",
    possession: "any",
  })
  async createCollection(
    @graphql.Args() args: CreateCollectionArgs
  ): Promise<Collection> {
    return await this.service.createCollection({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Collection)
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "update",
    possession: "any",
  })
  async updateCollection(
    @graphql.Args() args: UpdateCollectionArgs
  ): Promise<Collection | null> {
    try {
      return await this.service.updateCollection({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Collection)
  @nestAccessControl.UseRoles({
    resource: "Collection",
    action: "delete",
    possession: "any",
  })
  async deleteCollection(
    @graphql.Args() args: DeleteCollectionArgs
  ): Promise<Collection | null> {
    try {
      return await this.service.deleteCollection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ActionEvent], { name: "actionEvents" })
  @nestAccessControl.UseRoles({
    resource: "ActionEvent",
    action: "read",
    possession: "any",
  })
  async findActionEvents(
    @graphql.Parent() parent: Collection,
    @graphql.Args() args: ActionEventFindManyArgs
  ): Promise<ActionEvent[]> {
    const results = await this.service.findActionEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Archived], { name: "archiveds" })
  @nestAccessControl.UseRoles({
    resource: "Archived",
    action: "read",
    possession: "any",
  })
  async findArchiveds(
    @graphql.Parent() parent: Collection,
    @graphql.Args() args: ArchivedFindManyArgs
  ): Promise<Archived[]> {
    const results = await this.service.findArchiveds(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Member], { name: "members" })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  async findMembers(
    @graphql.Parent() parent: Collection,
    @graphql.Args() args: MemberFindManyArgs
  ): Promise<Member[]> {
    const results = await this.service.findMembers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
