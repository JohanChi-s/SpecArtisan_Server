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
import { Document } from "./Document";
import { DocumentCountArgs } from "./DocumentCountArgs";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentFindUniqueArgs } from "./DocumentFindUniqueArgs";
import { CreateDocumentArgs } from "./CreateDocumentArgs";
import { UpdateDocumentArgs } from "./UpdateDocumentArgs";
import { DeleteDocumentArgs } from "./DeleteDocumentArgs";
import { ActionEventFindManyArgs } from "../../actionEvent/base/ActionEventFindManyArgs";
import { ActionEvent } from "../../actionEvent/base/ActionEvent";
import { ArchivedFindManyArgs } from "../../archived/base/ArchivedFindManyArgs";
import { Archived } from "../../archived/base/Archived";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { MemberFindManyArgs } from "../../member/base/MemberFindManyArgs";
import { Member } from "../../member/base/Member";
import { DocumentService } from "../document.service";
@graphql.Resolver(() => Document)
export class DocumentResolverBase {
  constructor(protected readonly service: DocumentService) {}

  async _documentsMeta(
    @graphql.Args() args: DocumentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Document])
  async documents(
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.service.documents(args);
  }

  @graphql.Query(() => Document, { nullable: true })
  async document(
    @graphql.Args() args: DocumentFindUniqueArgs
  ): Promise<Document | null> {
    const result = await this.service.document(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Document)
  async createDocument(
    @graphql.Args() args: CreateDocumentArgs
  ): Promise<Document> {
    return await this.service.createDocument({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Document)
  async updateDocument(
    @graphql.Args() args: UpdateDocumentArgs
  ): Promise<Document | null> {
    try {
      return await this.service.updateDocument({
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

  @graphql.Mutation(() => Document)
  async deleteDocument(
    @graphql.Args() args: DeleteDocumentArgs
  ): Promise<Document | null> {
    try {
      return await this.service.deleteDocument(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ActionEvent], { name: "actionEvents" })
  async findActionEvents(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: ActionEventFindManyArgs
  ): Promise<ActionEvent[]> {
    const results = await this.service.findActionEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Archived], { name: "archiveds" })
  async findArchiveds(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: ArchivedFindManyArgs
  ): Promise<Archived[]> {
    const results = await this.service.findArchiveds(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Document], { name: "childDocuments" })
  async findChildDocuments(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    const results = await this.service.findChildDocuments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Comment], { name: "comments" })
  async findComments(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Document], { name: "documents" })
  async findDocuments(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    const results = await this.service.findDocuments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Member], { name: "members" })
  async findMembers(
    @graphql.Parent() parent: Document,
    @graphql.Args() args: MemberFindManyArgs
  ): Promise<Member[]> {
    const results = await this.service.findMembers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
