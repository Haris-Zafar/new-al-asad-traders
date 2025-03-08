import { DemandListItemWhereInput } from "./DemandListItemWhereInput";
import { DemandListItemOrderByInput } from "./DemandListItemOrderByInput";

export type DemandListItemFindManyArgs = {
  where?: DemandListItemWhereInput;
  orderBy?: Array<DemandListItemOrderByInput>;
  skip?: number;
  take?: number;
};
