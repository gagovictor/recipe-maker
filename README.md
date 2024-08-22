# Recipe Maker

A full-stack web application for querying recipes based on a list of ingredients.

## Backend

### Overview

Recipe Maker API is a NestJS-based GraphQL API that fetches recipes based on provided ingredients. It integrates with the Spoonacular API to retrieve recipe data.

### Features

- Fetch recipes using ingredients
- Integrates with the Spoonacular API
- Uses GraphQL for querying

### Getting Started

1. **Set Up Environment Variables**

   Create a .env file in the root directory and add your Spoonacular API key:

   ```env
   SPOONACULAR_API_KEY=your_spoonacular_api_key
   ```

2. **Run the Application**

   Start the application to begin serving the API:

   ```bash
   npm run start
   # or
   yarn start
   ```

   The application will be available at http://localhost:3000/graphql.

### GraphQL Playground

To interact with your GraphQL API, use the GraphQL Playground available at http://localhost:3000/graphql.

### Sample Query

Here’s a sample query to get recipes based on ingredients:

```graphql
query {
  getRecipes(ingredients: ["tomato", "basil", "mozzarella"]) {
    id
    title
    instructions
    ingredients
  }
}
```


## Frontend

***Work in progress.***

The Angular application provides a user interface to interact with the Recipe Maker API. Follow these steps to set up and use the Angular app:

1. **Set Up Angular App**

   Ensure your Angular app is configured to connect to the GraphQL endpoint at http://localhost:3000/graphql.

2. **Run Angular App**

   Start the Angular application:

   ```bash
   npm run start
   # or
   yarn start
   ```

   The Angular app will be available at http://localhost:4200.

3. **Using the UI**

   - Open the Angular application in your browser.
   - Enter a list of ingredients in the provided input field.
   - Submit the form to see the list of recipes fetched from the API based on your ingredients.

4. **Sample UI Query**

   Example of using the Angular UI to query recipes with ingredients:

   - Input: ["tomato", "basil", "mozzarella"]
   - The UI will send the query to the GraphQL endpoint and display the results.

Feel free to customize the UI and enhance it with additional features or styles.