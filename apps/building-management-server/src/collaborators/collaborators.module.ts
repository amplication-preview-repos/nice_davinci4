import { Module } from "@nestjs/common";
import { CollaboratorsModuleBase } from "./base/collaborators.module.base";
import { CollaboratorsService } from "./collaborators.service";
import { CollaboratorsController } from "./collaborators.controller";
import { CollaboratorsResolver } from "./collaborators.resolver";

@Module({
  imports: [CollaboratorsModuleBase],
  controllers: [CollaboratorsController],
  providers: [CollaboratorsService, CollaboratorsResolver],
  exports: [CollaboratorsService],
})
export class CollaboratorsModule {}
