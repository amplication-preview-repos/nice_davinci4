import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BuildingsService } from "./buildings.service";
import { BuildingsControllerBase } from "./base/buildings.controller.base";

@swagger.ApiTags("buildings")
@common.Controller("buildings")
export class BuildingsController extends BuildingsControllerBase {
  constructor(protected readonly service: BuildingsService) {
    super(service);
  }
}
