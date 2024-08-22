import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { HttpModule } from '@nestjs/axios';
import { RecipeService } from './services/recipe.service';
import { AppController } from './controllers/app.controller';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [
    HttpModule,
    GraphqlModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    RecipeService
  ],
})
export class AppModule {}
