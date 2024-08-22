import { Resolver, Query, Args } from '@nestjs/graphql';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}
  
  @Query(() => [Recipe])
  async getRecipes(@Args('ingredients', { type: () => [String] }) ingredients: string[]): Promise<Recipe[]> {
    return this.recipeService.getRecipes(ingredients);
  }
}
