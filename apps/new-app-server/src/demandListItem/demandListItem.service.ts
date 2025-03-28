import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemandListItemServiceBase } from "./base/demandListItem.service.base";

@Injectable()
export class DemandListItemService extends DemandListItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
