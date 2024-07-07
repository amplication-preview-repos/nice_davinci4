import { Module } from "@nestjs/common";
import { RolesModuleBase } from "./base/roles.module.base";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { RolesResolver } from "./roles.resolver";

@Module({
  imports: [RolesModuleBase],
  controllers: [RolesController],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
