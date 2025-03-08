import { DemandListWhereInput } from "./DemandListWhereInput";
import { DemandListOrderByInput } from "./DemandListOrderByInput";

export type DemandListFindManyArgs = {
  where?: DemandListWhereInput;
  orderBy?: Array<DemandListOrderByInput>;
  skip?: number;
  take?: number;
};
