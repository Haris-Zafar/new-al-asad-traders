import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DemandListService } from "./demandList.service";
import { DemandListControllerBase } from "./base/demandList.controller.base";

@swagger.ApiTags("demandLists")
@common.Controller("demandLists")
export class DemandListController extends DemandListControllerBase {
  constructor(protected readonly service: DemandListService) {
    super(service);
  }
}
