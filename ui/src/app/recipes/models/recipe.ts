import { Ingredient } from "./ingredient";

export interface Recipe {
    id: string;
    title: string;
    image: string;
    instructions: string;
    likes: number;
    ingredients: Ingredient[];
    usedIngredients: Ingredient[];
    unusedIngredients: Ingredient[];
    missedIngredients: Ingredient[];
}
