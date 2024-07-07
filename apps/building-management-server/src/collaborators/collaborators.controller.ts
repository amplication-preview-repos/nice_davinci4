import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaboratorsService } from "./collaborators.service";
import { CollaboratorsControllerBase } from "./base/collaborators.controller.base";

@swagger.ApiTags("collaborators")
@common.Controller("collaborators")
export class CollaboratorsController extends CollaboratorsControllerBase {
  constructor(protected readonly service: CollaboratorsService) {
    super(service);
  }
}
