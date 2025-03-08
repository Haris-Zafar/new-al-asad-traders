import * as graphql from "@nestjs/graphql";
import { DemandListResolverBase } from "./base/demandList.resolver.base";
import { DemandList } from "./base/DemandList";
import { DemandListService } from "./demandList.service";

@graphql.Resolver(() => DemandList)
export class DemandListResolver extends DemandListResolverBase {
  constructor(protected readonly service: DemandListService) {
    super(service);
  }
}
