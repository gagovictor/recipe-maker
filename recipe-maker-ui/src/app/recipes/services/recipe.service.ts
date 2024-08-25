import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
          instructions
          ingredients
        }
      }
    `;

    return this.http.post<any>(this.apiUrl, { query });
  }
}
