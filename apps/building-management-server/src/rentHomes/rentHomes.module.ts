import { Module } from "@nestjs/common";
import { RentHomesModuleBase } from "./base/rentHomes.module.base";
import { RentHomesService } from "./rentHomes.service";
import { RentHomesController } from "./rentHomes.controller";
import { RentHomesResolver } from "./rentHomes.resolver";

@Module({
  imports: [RentHomesModuleBase],
  controllers: [RentHomesController],
  providers: [RentHomesService, RentHomesResolver],
  exports: [RentHomesService],
})
export class RentHomesModule {}
