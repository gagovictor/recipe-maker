import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Recipe } from 'src/models/recipe.model';

@Injectable()
export class RecipeService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('SPOONACULAR_API_KEY');
  }

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
