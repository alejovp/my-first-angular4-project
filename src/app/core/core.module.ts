import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { AuthService } from "../auth/auth.service";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    DataStorageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {}