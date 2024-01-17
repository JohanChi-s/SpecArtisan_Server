import * as graphql from "@nestjs/graphql";
import { ActionEventResolverBase } from "./base/actionEvent.resolver.base";
import { ActionEvent } from "./base/ActionEvent";
import { ActionEventService } from "./actionEvent.service";

@graphql.Resolver(() => ActionEvent)
export class ActionEventResolver extends ActionEventResolverBase {
  constructor(protected readonly service: ActionEventService) {
    super(service);
  }
}
