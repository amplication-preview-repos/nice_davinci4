import { Module } from "@nestjs/common";
import { BuildingsModuleBase } from "./base/buildings.module.base";
import { BuildingsService } from "./buildings.service";
import { BuildingsController } from "./buildings.controller";
import { BuildingsResolver } from "./buildings.resolver";

@Module({
  imports: [BuildingsModuleBase],
  controllers: [BuildingsController],
  providers: [BuildingsService, BuildingsResolver],
  exports: [BuildingsService],
})
export class BuildingsModule {}
