import * as graphql from "@nestjs/graphql";
import { ArchivedResolverBase } from "./base/archived.resolver.base";
import { Archived } from "./base/Archived";
import { ArchivedService } from "./archived.service";

@graphql.Resolver(() => Archived)
export class ArchivedResolver extends ArchivedResolverBase {
  constructor(protected readonly service: ArchivedService) {
    super(service);
  }
}
