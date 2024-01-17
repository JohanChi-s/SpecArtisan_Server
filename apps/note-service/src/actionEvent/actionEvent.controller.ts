import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActionEventService } from "./actionEvent.service";
import { ActionEventControllerBase } from "./base/actionEvent.controller.base";

@swagger.ApiTags("actionEvents")
@common.Controller("actionEvents")
export class ActionEventController extends ActionEventControllerBase {
  constructor(protected readonly service: ActionEventService) {
    super(service);
  }
}
