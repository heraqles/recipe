import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {router} from './app-routing.module';
import {RecipesComponent} from './components/recipes/recipes.component';
import {RecipesListsComponent} from './components/recipes/recipes-lists/recipes-lists.component';
import {RecipesService} from './services/recipes/recipes.service';
import {IngredientService} from './services/recipes/ingredient.service';
import {ListsService} from './services/lists/lists.service';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {AddRecipeComponent} from './components/recipes/add-recipe/add-recipe.component';
import {ListContainerComponent} from './components/lists/list-container.component';
import {ListComponent} from './components/lists/list/list.component';
import {CapitalizeFirstPipe} from './pipes/capitalize.pipe';
import {AddIngredientsComponent} from './components/recipes/add-ingredients/add-ingredients.component';
import {SearchPipe} from './pipes/search.pipe';
import {OrderByPipe} from './pipes/orderBy.pipe';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {SearchInputComponent} from './components/search-input/search-input.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TableNavigationComponent } from './components/table-navigation/table-navigation.component';
import { DataService } from './services/recipes/recipe-list.data.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListsComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
    ListContainerComponent,
    ListComponent,
    CapitalizeFirstPipe,
    SearchPipe,
    OrderByPipe,
    AddIngredientsComponent,
    SearchInputComponent,
    LandingPageComponent,
    TableNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2TableModule,
    HttpClientModule,
    router
  ],
  providers: [RecipesService,
    ListsService,
    DataService,
    IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
