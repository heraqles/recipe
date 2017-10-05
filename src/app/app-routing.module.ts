import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './components/recipes/recipes.component';
import {AddRecipeComponent} from './components/recipes/add-recipe/add-recipe.component';
import {ListContainerComponent} from './components/lists/list-container.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {TableNavigationComponent} from './components/table-navigation/table-navigation.component'
const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'table-navigation',
    component: TableNavigationComponent
  },
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
    redirectTo: 'recipes/details/1',
    pathMatch: 'full'
  }

];
export const router = RouterModule.forRoot(routes);
