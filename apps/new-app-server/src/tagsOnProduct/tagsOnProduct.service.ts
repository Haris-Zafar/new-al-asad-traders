import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagsOnProductServiceBase } from "./base/tagsOnProduct.service.base";

@Injectable()
export class TagsOnProductService extends TagsOnProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
