import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipeService } from './services/recipe.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
            playground: true
        }),
        HttpModule,
    ],
    providers: [
        RecipeResolver,
        RecipeService
    ],
})
export class GraphqlModule {}
