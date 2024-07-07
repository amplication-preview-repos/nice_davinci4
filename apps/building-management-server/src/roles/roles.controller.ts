import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RolesService } from "./roles.service";
import { RolesControllerBase } from "./base/roles.controller.base";

@swagger.ApiTags("roles")
@common.Controller("roles")
export class RolesController extends RolesControllerBase {
  constructor(protected readonly service: RolesService) {
    super(service);
  }
}
