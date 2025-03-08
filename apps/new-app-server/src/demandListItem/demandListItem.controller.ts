import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DemandListItemService } from "./demandListItem.service";
import { DemandListItemControllerBase } from "./base/demandListItem.controller.base";

@swagger.ApiTags("demandListItems")
@common.Controller("demandListItems")
export class DemandListItemController extends DemandListItemControllerBase {
  constructor(protected readonly service: DemandListItemService) {
    super(service);
  }
}
