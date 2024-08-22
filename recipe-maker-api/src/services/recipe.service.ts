import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Recipe } from 'src/models/recipe.model';

@Injectable()
export class RecipeService {
  private readonly apiKey = 'YOUR_SPOONACULAR_API_KEY';
  private readonly apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

  constructor(private readonly httpService: HttpService) {}

  async getRecipes(ingredients: string[]): Promise<Recipe[]> {
    const response = await this.httpService
      .get(`${this.apiUrl}?ingredients=${ingredients.join(',')}&apiKey=${this.apiKey}`)
      .toPromise();
    return response.data.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      instructions: recipe.instructions || '',
      ingredients: recipe.ingredients || [],
    }));
  }
}
