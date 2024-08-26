import { Recipe } from "./recipe";

export interface QueryRecipesResponse {
    data: {
        getRecipes: Recipe[];
    }
}