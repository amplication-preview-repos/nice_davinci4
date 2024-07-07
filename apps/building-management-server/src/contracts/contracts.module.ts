import { Module } from "@nestjs/common";
import { ContractsModuleBase } from "./base/contracts.module.base";
import { ContractsService } from "./contracts.service";
import { ContractsController } from "./contracts.controller";
import { ContractsResolver } from "./contracts.resolver";

@Module({
  imports: [ContractsModuleBase],
  controllers: [ContractsController],
  providers: [ContractsService, ContractsResolver],
  exports: [ContractsService],
})
export class ContractsModule {}
