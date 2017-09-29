import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './components/recipes/recipes.component';
import {AddRecipeComponent} from './components/recipes/add-recipe/add-recipe.component';
import {ListContainerComponent} from './components/lists/list-container.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
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
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
export const router = RouterModule.forRoot(routes);
