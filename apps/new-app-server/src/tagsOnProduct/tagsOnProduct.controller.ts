import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagsOnProductService } from "./tagsOnProduct.service";
import { TagsOnProductControllerBase } from "./base/tagsOnProduct.controller.base";

@swagger.ApiTags("tagsOnProducts")
@common.Controller("tagsOnProducts")
export class TagsOnProductController extends TagsOnProductControllerBase {
  constructor(protected readonly service: TagsOnProductService) {
    super(service);
  }
}
