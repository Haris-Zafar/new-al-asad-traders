import * as graphql from "@nestjs/graphql";
import { DemandListItemResolverBase } from "./base/demandListItem.resolver.base";
import { DemandListItem } from "./base/DemandListItem";
import { DemandListItemService } from "./demandListItem.service";

@graphql.Resolver(() => DemandListItem)
export class DemandListItemResolver extends DemandListItemResolverBase {
  constructor(protected readonly service: DemandListItemService) {
    super(service);
  }
}
