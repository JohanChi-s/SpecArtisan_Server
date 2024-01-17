import { Module } from "@nestjs/common";
import { ActionEventModuleBase } from "./base/actionEvent.module.base";
import { ActionEventService } from "./actionEvent.service";
import { ActionEventController } from "./actionEvent.controller";
import { ActionEventResolver } from "./actionEvent.resolver";

@Module({
  imports: [ActionEventModuleBase],
  controllers: [ActionEventController],
  providers: [ActionEventService, ActionEventResolver],
  exports: [ActionEventService],
})
export class ActionEventModule {}
