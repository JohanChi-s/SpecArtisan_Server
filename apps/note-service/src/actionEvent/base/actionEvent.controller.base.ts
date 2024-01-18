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
import { ActionEventService } from "../actionEvent.service";
import { ActionEventCreateInput } from "./ActionEventCreateInput";
import { ActionEvent } from "./ActionEvent";
import { ActionEventFindManyArgs } from "./ActionEventFindManyArgs";
import { ActionEventWhereUniqueInput } from "./ActionEventWhereUniqueInput";
import { ActionEventUpdateInput } from "./ActionEventUpdateInput";

export class ActionEventControllerBase {
  constructor(protected readonly service: ActionEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ActionEvent })
  @swagger.ApiBody({
    type: ActionEventCreateInput,
  })
  async createActionEvent(
    @common.Body() data: ActionEventCreateInput
  ): Promise<ActionEvent> {
    return await this.service.createActionEvent({
      data: {
        ...data,

        collectionId: data.collectionId
          ? {
              connect: data.collectionId,
            }
          : undefined,

        documentId: data.documentId
          ? {
              connect: data.documentId,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ActionEvent] })
  @ApiNestedQuery(ActionEventFindManyArgs)
  async actionEvents(@common.Req() request: Request): Promise<ActionEvent[]> {
    const args = plainToClass(ActionEventFindManyArgs, request.query);
    return this.service.actionEvents({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ActionEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async actionEvent(
    @common.Param() params: ActionEventWhereUniqueInput
  ): Promise<ActionEvent | null> {
    const result = await this.service.actionEvent({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ActionEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ActionEventUpdateInput,
  })
  async updateActionEvent(
    @common.Param() params: ActionEventWhereUniqueInput,
    @common.Body() data: ActionEventUpdateInput
  ): Promise<ActionEvent | null> {
    try {
      return await this.service.updateActionEvent({
        where: params,
        data: {
          ...data,

          collectionId: data.collectionId
            ? {
                connect: data.collectionId,
              }
            : undefined,

          documentId: data.documentId
            ? {
                connect: data.documentId,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: ActionEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteActionEvent(
    @common.Param() params: ActionEventWhereUniqueInput
  ): Promise<ActionEvent | null> {
    try {
      return await this.service.deleteActionEvent({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
