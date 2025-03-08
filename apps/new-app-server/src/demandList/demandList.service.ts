import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemandListServiceBase } from "./base/demandList.service.base";

@Injectable()
export class DemandListService extends DemandListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
