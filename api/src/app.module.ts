import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { HttpModule } from '@nestjs/axios';
import { RecipeService } from './services/recipe.service';
import { AppController } from './controllers/app.controller';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    GraphqlModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
