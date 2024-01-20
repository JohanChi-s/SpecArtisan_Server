/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Document, // @ts-ignore
  ActionEvent, // @ts-ignore
  Archived, // @ts-ignore
  Comment, // @ts-ignore
  Member,
} from "@prisma/client";

export class DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DocumentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentCountArgs>
  ): Promise<number> {
    return this.prisma.document.count(args);
  }

  async documents<T extends Prisma.DocumentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentFindManyArgs>
  ): Promise<Document[]> {
    return this.prisma.document.findMany(args);
  }
  async document<T extends Prisma.DocumentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentFindUniqueArgs>
  ): Promise<Document | null> {
    return this.prisma.document.findUnique(args);
  }
  async createDocument<T extends Prisma.DocumentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentCreateArgs>
  ): Promise<Document> {
    return this.prisma.document.create<T>(args);
  }
  async updateDocument<T extends Prisma.DocumentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentUpdateArgs>
  ): Promise<Document> {
    return this.prisma.document.update<T>(args);
  }
  async deleteDocument<T extends Prisma.DocumentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDeleteArgs>
  ): Promise<Document> {
    return this.prisma.document.delete(args);
  }

  async findActionEvents(
    parentId: string,
    args: Prisma.ActionEventFindManyArgs
  ): Promise<ActionEvent[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .actionEvents(args);
  }

  async findArchiveds(
    parentId: string,
    args: Prisma.ArchivedFindManyArgs
  ): Promise<Archived[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .archiveds(args);
  }

  async findChildDocuments(
    parentId: string,
    args: Prisma.DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .childDocuments(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findDocuments(
    parentId: string,
    args: Prisma.DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .documents(args);
  }

  async findMembers(
    parentId: string,
    args: Prisma.MemberFindManyArgs
  ): Promise<Member[]> {
    return this.prisma.document
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .members(args);
  }
}