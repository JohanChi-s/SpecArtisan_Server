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
import { CollectionService } from "../collection.service";
import { CollectionCreateInput } from "./CollectionCreateInput";
import { Collection } from "./Collection";
import { CollectionFindManyArgs } from "./CollectionFindManyArgs";
import { CollectionWhereUniqueInput } from "./CollectionWhereUniqueInput";
import { CollectionUpdateInput } from "./CollectionUpdateInput";
import { ActionEventFindManyArgs } from "../../actionEvent/base/ActionEventFindManyArgs";
import { ActionEvent } from "../../actionEvent/base/ActionEvent";
import { ActionEventWhereUniqueInput } from "../../actionEvent/base/ActionEventWhereUniqueInput";
import { ArchivedFindManyArgs } from "../../archived/base/ArchivedFindManyArgs";
import { Archived } from "../../archived/base/Archived";
import { ArchivedWhereUniqueInput } from "../../archived/base/ArchivedWhereUniqueInput";
import { MemberFindManyArgs } from "../../member/base/MemberFindManyArgs";
import { Member } from "../../member/base/Member";
import { MemberWhereUniqueInput } from "../../member/base/MemberWhereUniqueInput";

export class CollectionControllerBase {
  constructor(protected readonly service: CollectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Collection })
  async createCollection(
    @common.Body() data: CollectionCreateInput
  ): Promise<Collection> {
    return await this.service.createCollection({
      data: data,
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Collection] })
  @ApiNestedQuery(CollectionFindManyArgs)
  async collections(@common.Req() request: Request): Promise<Collection[]> {
    const args = plainToClass(CollectionFindManyArgs, request.query);
    return this.service.collections({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async collection(
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Collection | null> {
    const result = await this.service.collection({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCollection(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() data: CollectionUpdateInput
  ): Promise<Collection | null> {
    try {
      return await this.service.updateCollection({
        where: params,
        data: data,
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
  @swagger.ApiOkResponse({ type: Collection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCollection(
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Collection | null> {
    try {
      return await this.service.deleteCollection({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/actionEvents")
  @ApiNestedQuery(ActionEventFindManyArgs)
  async findActionEvents(
    @common.Req() request: Request,
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<ActionEvent[]> {
    const query = plainToClass(ActionEventFindManyArgs, request.query);
    const results = await this.service.findActionEvents(params.id, {
      ...query,
      select: {
        action: true,
        actor: true,
        assignee: true,
        assigner: true,

        collectionId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        documentId: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/actionEvents")
  async connectActionEvents(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ActionEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actionEvents: {
        connect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/actionEvents")
  async updateActionEvents(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ActionEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actionEvents: {
        set: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/actionEvents")
  async disconnectActionEvents(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ActionEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actionEvents: {
        disconnect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/archiveds")
  @ApiNestedQuery(ArchivedFindManyArgs)
  async findArchiveds(
    @common.Req() request: Request,
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Archived[]> {
    const query = plainToClass(ArchivedFindManyArgs, request.query);
    const results = await this.service.findArchiveds(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/archiveds")
  async connectArchiveds(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ArchivedWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      archiveds: {
        connect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/archiveds")
  async updateArchiveds(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ArchivedWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      archiveds: {
        set: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/archiveds")
  async disconnectArchiveds(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: ArchivedWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      archiveds: {
        disconnect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/members")
  @ApiNestedQuery(MemberFindManyArgs)
  async findMembers(
    @common.Req() request: Request,
    @common.Param() params: CollectionWhereUniqueInput
  ): Promise<Member[]> {
    const query = plainToClass(MemberFindManyArgs, request.query);
    const results = await this.service.findMembers(params.id, {
      ...query,
      select: {
        collection: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        role: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/members")
  async connectMembers(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: MemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        connect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/members")
  async updateMembers(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: MemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        set: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/members")
  async disconnectMembers(
    @common.Param() params: CollectionWhereUniqueInput,
    @common.Body() body: MemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        disconnect: body,
      },
    };
    await this.service.updateCollection({
      where: params,
      data,
      select: { id: true },
    });
  }
}
