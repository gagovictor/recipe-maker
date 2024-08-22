import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  instructions?: string;

  @Field(() => [String])
  ingredients: string[];
}
