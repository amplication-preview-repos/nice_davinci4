import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuildingsServiceBase } from "./base/buildings.service.base";

@Injectable()
export class BuildingsService extends BuildingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
