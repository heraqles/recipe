import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './components/recipes/recipes.component';
import {AddRecipeComponent} from './components/recipes/add-recipe/add-recipe.component';
import {ListContainerComponent} from './components/lists/list-container.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: 'details/:id',
        component: RecipeDetailComponent
      }
    ]
  },
  {
    path: 'new-recipe',
    component: AddRecipeComponent
  },
  {
    path: 'lists',
    component: ListContainerComponent
  },
  {
    path: '',
    redirectTo: 'recipes/details/1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
export const router = RouterModule.forRoot(routes);
