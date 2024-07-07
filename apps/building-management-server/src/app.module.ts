import { Module } from "@nestjs/common";
import { CustomersModule } from "./customers/customers.module";
import { BuildingsModule } from "./buildings/buildings.module";
import { CollaboratorsModule } from "./collaborators/collaborators.module";
import { ResidentsModule } from "./residents/residents.module";
import { RentHomesModule } from "./rentHomes/rentHomes.module";
import { RolesModule } from "./roles/roles.module";
import { ContractsModule } from "./contracts/contracts.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CustomersModule,
    BuildingsModule,
    CollaboratorsModule,
    ResidentsModule,
    RentHomesModule,
    RolesModule,
    ContractsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
