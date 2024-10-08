import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Ingredient {
  
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}
