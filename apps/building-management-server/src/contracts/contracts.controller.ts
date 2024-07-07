import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractsService } from "./contracts.service";
import { ContractsControllerBase } from "./base/contracts.controller.base";

@swagger.ApiTags("contracts")
@common.Controller("contracts")
export class ContractsController extends ContractsControllerBase {
  constructor(protected readonly service: ContractsService) {
    super(service);
  }
}
