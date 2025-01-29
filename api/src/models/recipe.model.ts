import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Ingredient } from './ingredient.model';

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  image: string;

  @Field({ nullable: true })
  instructions?: string;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];

  @Field(() => [Ingredient])
  usedIngredients: Ingredient[];

  @Field(() => [Ingredient])
  unusedIngredients: Ingredient[];

  @Field(() => [Ingredient])
  missedIngredients: Ingredient[];

  @Field(() => Number)
  likes: number;
}
