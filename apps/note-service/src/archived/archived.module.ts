import { Module } from "@nestjs/common";
import { ArchivedModuleBase } from "./base/archived.module.base";
import { ArchivedService } from "./archived.service";
import { ArchivedController } from "./archived.controller";
import { ArchivedResolver } from "./archived.resolver";

@Module({
  imports: [ArchivedModuleBase],
  controllers: [ArchivedController],
  providers: [ArchivedService, ArchivedResolver],
  exports: [ArchivedService],
})
export class ArchivedModule {}
