import { Module } from "@nestjs/common";
import { ResidentsModuleBase } from "./base/residents.module.base";
import { ResidentsService } from "./residents.service";
import { ResidentsController } from "./residents.controller";
import { ResidentsResolver } from "./residents.resolver";

@Module({
  imports: [ResidentsModuleBase],
  controllers: [ResidentsController],
  providers: [ResidentsService, ResidentsResolver],
  exports: [ResidentsService],
})
export class ResidentsModule {}
