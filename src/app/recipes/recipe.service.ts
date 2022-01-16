import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Test Recipe 1 Desc', 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg'),
        new Recipe('Recipe 2', 'Test Recipe 2 Desc', 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg'),
        new Recipe('Recipe 3', 'Test Recipe 3 Desc', 'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}