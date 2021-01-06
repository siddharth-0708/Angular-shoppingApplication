import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipiesDetailsComponent } from './recipies/recipies-details/recipies-details.component';
import { RecipiesItemComponent } from './recipies/recipies-list/recipies-item/recipies-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingServices } from './shopping/shopping.services';
import { RecipiesService } from './recipies/recipies.service';
import { AppRouterModule } from './app-router.module';
import { EditRecipiesComponent } from './recipies/edit-recipies/edit-recipies.component';
import { DataStorageService } from './shared/data-storage.services';
import { from } from 'rxjs';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingComponent,
    RecipiesListComponent,
    RecipiesDetailsComponent,
    RecipiesItemComponent,
    ShoppingEditComponent,
    DropDownDirective,
    EditRecipiesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [ShoppingServices, RecipiesService, DataStorageService], //now this can be used in everywhere
  bootstrap: [AppComponent]
}) //haha
export class AppModule { }
