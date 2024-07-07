import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractsServiceBase } from "./base/contracts.service.base";

@Injectable()
export class ContractsService extends ContractsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
