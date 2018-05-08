import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    // { path: '', component: RecipesComponent },
    { path: '', component: HomeComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // Now with lazy loading...
    { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}