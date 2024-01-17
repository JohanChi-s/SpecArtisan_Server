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
import { Team } from "./Team";
import { TeamCountArgs } from "./TeamCountArgs";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamFindUniqueArgs } from "./TeamFindUniqueArgs";
import { CreateTeamArgs } from "./CreateTeamArgs";
import { UpdateTeamArgs } from "./UpdateTeamArgs";
import { DeleteTeamArgs } from "./DeleteTeamArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { WorkspaceFindManyArgs } from "../../workspace/base/WorkspaceFindManyArgs";
import { Workspace } from "../../workspace/base/Workspace";
import { TeamService } from "../team.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Team)
export class TeamResolverBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async _teamsMeta(
    @graphql.Args() args: TeamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Team])
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async teams(@graphql.Args() args: TeamFindManyArgs): Promise<Team[]> {
    return this.service.teams(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Team, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  async team(@graphql.Args() args: TeamFindUniqueArgs): Promise<Team | null> {
    const result = await this.service.team(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Team)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  async createTeam(@graphql.Args() args: CreateTeamArgs): Promise<Team> {
    return await this.service.createTeam({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Team)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateTeam(@graphql.Args() args: UpdateTeamArgs): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
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

  @graphql.Mutation(() => Team)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  async deleteTeam(@graphql.Args() args: DeleteTeamArgs): Promise<Team | null> {
    try {
      return await this.service.deleteTeam(args);
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
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @graphql.Parent() parent: Team,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Workspace], { name: "workspaces" })
  @nestAccessControl.UseRoles({
    resource: "Workspace",
    action: "read",
    possession: "any",
  })
  async findWorkspaces(
    @graphql.Parent() parent: Team,
    @graphql.Args() args: WorkspaceFindManyArgs
  ): Promise<Workspace[]> {
    const results = await this.service.findWorkspaces(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
