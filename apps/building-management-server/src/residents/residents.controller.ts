import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResidentsService } from "./residents.service";
import { ResidentsControllerBase } from "./base/residents.controller.base";

@swagger.ApiTags("residents")
@common.Controller("residents")
export class ResidentsController extends ResidentsControllerBase {
  constructor(protected readonly service: ResidentsService) {
    super(service);
  }
}
