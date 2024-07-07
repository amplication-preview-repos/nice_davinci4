import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RentHomesServiceBase } from "./base/rentHomes.service.base";

@Injectable()
export class RentHomesService extends RentHomesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
