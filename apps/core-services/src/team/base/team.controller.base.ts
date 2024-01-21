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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TeamService } from "../team.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCreateInput } from "./TeamCreateInput";
import { Team } from "./Team";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamUpdateInput } from "./TeamUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WorkspaceFindManyArgs } from "../../workspace/base/WorkspaceFindManyArgs";
import { Workspace } from "../../workspace/base/Workspace";
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TeamCreateInput,
  })
  async createTeam(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.createTeam({
      data: data,
      select: {
        avatarUrl: true,
        canComment: true,
        canShare: true,
        createdAt: true,
        defaultUserRole: true,
        id: true,
        inviteRequired: true,
        name: true,
        subDomain: true,
        theme: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async teams(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.teams({
      ...args,
      select: {
        avatarUrl: true,
        canComment: true,
        canShare: true,
        createdAt: true,
        defaultUserRole: true,
        id: true,
        inviteRequired: true,
        name: true,
        subDomain: true,
        theme: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async team(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.team({
      where: params,
      select: {
        avatarUrl: true,
        canComment: true,
        canShare: true,
        createdAt: true,
        defaultUserRole: true,
        id: true,
        inviteRequired: true,
        name: true,
        subDomain: true,
        theme: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TeamUpdateInput,
  })
  async updateTeam(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
        where: params,
        data: data,
        select: {
          avatarUrl: true,
          canComment: true,
          canShare: true,
          createdAt: true,
          defaultUserRole: true,
          id: true,
          inviteRequired: true,
          name: true,
          subDomain: true,
          theme: true,
          updatedAt: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTeam(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.deleteTeam({
        where: params,
        select: {
          avatarUrl: true,
          canComment: true,
          canShare: true,
          createdAt: true,
          defaultUserRole: true,
          id: true,
          inviteRequired: true,
          name: true,
          subDomain: true,
          theme: true,
          updatedAt: true,
          url: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        isActive: true,
        isAdmin: true,
        isViewer: true,
        language: true,
        lastActiveAt: true,
        lastName: true,

        profile: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/workspaces")
  @ApiNestedQuery(WorkspaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async findWorkspaces(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Workspace[]> {
    const query = plainToClass(WorkspaceFindManyArgs, request.query);
    const results = await this.service.findWorkspaces(params.id, {
      ...query,
      select: {
        createdAt: true,
        domain: true,
        id: true,
        isPublic: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workspaces")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectWorkspaces(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspaces: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workspaces")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateWorkspaces(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspaces: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workspaces")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectWorkspaces(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkspaceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workspaces: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }
}
