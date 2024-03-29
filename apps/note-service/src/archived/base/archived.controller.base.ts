/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArchivedService } from "../archived.service";
import { ArchivedCreateInput } from "./ArchivedCreateInput";
import { Archived } from "./Archived";
import { ArchivedFindManyArgs } from "./ArchivedFindManyArgs";
import { ArchivedWhereUniqueInput } from "./ArchivedWhereUniqueInput";
import { ArchivedUpdateInput } from "./ArchivedUpdateInput";
import { CollectionFindManyArgs } from "../../collection/base/CollectionFindManyArgs";
import { Collection } from "../../collection/base/Collection";
import { CollectionWhereUniqueInput } from "../../collection/base/CollectionWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

export class ArchivedControllerBase {
  constructor(protected readonly service: ArchivedService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Archived })
  @swagger.ApiBody({
    type: ArchivedCreateInput,
  })
  async createArchived(
    @common.Body() data: ArchivedCreateInput
  ): Promise<Archived> {
    return await this.service.createArchived({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Archived] })
  @ApiNestedQuery(ArchivedFindManyArgs)
  async archiveds(@common.Req() request: Request): Promise<Archived[]> {
    const args = plainToClass(ArchivedFindManyArgs, request.query);
    return this.service.archiveds({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Archived })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async archived(
    @common.Param() params: ArchivedWhereUniqueInput
  ): Promise<Archived | null> {
    const result = await this.service.archived({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Archived })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ArchivedUpdateInput,
  })
  async updateArchived(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() data: ArchivedUpdateInput
  ): Promise<Archived | null> {
    try {
      return await this.service.updateArchived({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Archived })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteArchived(
    @common.Param() params: ArchivedWhereUniqueInput
  ): Promise<Archived | null> {
    try {
      return await this.service.deleteArchived({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/collections")
  @ApiNestedQuery(CollectionFindManyArgs)
  async findCollections(
    @common.Req() request: Request,
    @common.Param() params: ArchivedWhereUniqueInput
  ): Promise<Collection[]> {
    const query = plainToClass(CollectionFindManyArgs, request.query);
    const results = await this.service.findCollections(params.id, {
      ...query,
      select: {
        authorId: true,
        canShare: true,
        childCollectionIds: true,
        createdAt: true,
        description: true,
        downloadPermission: true,
        icon: true,
        id: true,
        index: true,
        isSaving: true,
        name: true,
        parentCollectionId: true,
        updatedAt: true,
        url: true,
        workspaceId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/collections")
  async connectCollections(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: CollectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collections: {
        connect: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/collections")
  async updateCollections(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: CollectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collections: {
        set: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/collections")
  async disconnectCollections(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: CollectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collections: {
        disconnect: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  async findDocuments(
    @common.Req() request: Request,
    @common.Param() params: ArchivedWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        authorId: true,
        collectionId: true,
        createdAt: true,
        emoji: true,
        id: true,
        isFullWidth: true,
        isPublic: true,
        publishedAt: true,
        revision: true,
        templateId: true,
        text: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  async connectDocuments(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  async updateDocuments(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  async disconnectDocuments(
    @common.Param() params: ArchivedWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.updateArchived({
      where: params,
      data,
      select: { id: true },
    });
  }
}
