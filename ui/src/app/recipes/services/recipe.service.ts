import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { QueryRecipesResponse } from '../models/recipe-api';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/graphql';

  constructor(private http: HttpClient) {}

  queryRecipes(ingredients: string[]): Observable<any> {
    const query = `
      query {
        getRecipes(ingredients: ${JSON.stringify(ingredients)}) {
          id
          title
          image
          instructions
          likes
          ingredients {
            id
            name
          }
          usedIngredients {
            id
            name
          }
          unusedIngredients {
            id
            name
          }
          missedIngredients {
            id
            name
          }
        }
      }
    `;

    return this.http.post<any>(this.apiUrl, { query }).pipe(
      map((response: QueryRecipesResponse) => response.data.getRecipes)
    );
  }
}
