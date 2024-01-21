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
import { Comment } from "./Comment";
import { CommentCountArgs } from "./CommentCountArgs";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentFindUniqueArgs } from "./CommentFindUniqueArgs";
import { CreateCommentArgs } from "./CreateCommentArgs";
import { UpdateCommentArgs } from "./UpdateCommentArgs";
import { DeleteCommentArgs } from "./DeleteCommentArgs";
import { Document } from "../../document/base/Document";
import { Position } from "../../position/base/Position";
import { CommentService } from "../comment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Comment)
export class CommentResolverBase {
  constructor(
    protected readonly service: CommentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async _commentsMeta(
    @graphql.Args() args: CommentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Comment])
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async comments(
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.service.comments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Comment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "own",
  })
  async comment(
    @graphql.Args() args: CommentFindUniqueArgs
  ): Promise<Comment | null> {
    const result = await this.service.comment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "create",
    possession: "any",
  })
  async createComment(
    @graphql.Args() args: CreateCommentArgs
  ): Promise<Comment> {
    return await this.service.createComment({
      ...args,
      data: {
        ...args.data,

        document: args.data.document
          ? {
              connect: args.data.document,
            }
          : undefined,

        parentComment: args.data.parentComment
          ? {
              connect: args.data.parentComment,
            }
          : undefined,

        position: args.data.position
          ? {
              connect: args.data.position,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "update",
    possession: "any",
  })
  async updateComment(
    @graphql.Args() args: UpdateCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        ...args,
        data: {
          ...args.data,

          document: args.data.document
            ? {
                connect: args.data.document,
              }
            : undefined,

          parentComment: args.data.parentComment
            ? {
                connect: args.data.parentComment,
              }
            : undefined,

          position: args.data.position
            ? {
                connect: args.data.position,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Comment)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "delete",
    possession: "any",
  })
  async deleteComment(
    @graphql.Args() args: DeleteCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment(args);
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
  @graphql.ResolveField(() => [Comment], { name: "replies" })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findReplies(
    @graphql.Parent() parent: Comment,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findReplies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Document, {
    nullable: true,
    name: "document",
  })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async getDocument(
    @graphql.Parent() parent: Comment
  ): Promise<Document | null> {
    const result = await this.service.getDocument(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Comment, {
    nullable: true,
    name: "parentComment",
  })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async getParentComment(
    @graphql.Parent() parent: Comment
  ): Promise<Comment | null> {
    const result = await this.service.getParentComment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Position, {
    nullable: true,
    name: "position",
  })
  @nestAccessControl.UseRoles({
    resource: "Position",
    action: "read",
    possession: "any",
  })
  async getPosition(
    @graphql.Parent() parent: Comment
  ): Promise<Position | null> {
    const result = await this.service.getPosition(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}