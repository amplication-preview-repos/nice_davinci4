import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RentHomesService } from "./rentHomes.service";
import { RentHomesControllerBase } from "./base/rentHomes.controller.base";

@swagger.ApiTags("rentHomes")
@common.Controller("rentHomes")
export class RentHomesController extends RentHomesControllerBase {
  constructor(protected readonly service: RentHomesService) {
    super(service);
  }
}
