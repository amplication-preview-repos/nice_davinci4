import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResidentsServiceBase } from "./base/residents.service.base";

@Injectable()
export class ResidentsService extends ResidentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
