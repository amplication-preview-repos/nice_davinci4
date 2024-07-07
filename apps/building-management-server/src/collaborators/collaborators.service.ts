import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaboratorsServiceBase } from "./base/collaborators.service.base";

@Injectable()
export class CollaboratorsService extends CollaboratorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
