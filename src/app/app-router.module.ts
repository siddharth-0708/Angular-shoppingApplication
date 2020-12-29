import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipiesStartComponent } from "./recipies/recipies-start/recipies-start.component";
import { RecipiesDetailsComponent } from "./recipies/recipies-details/recipies-details.component";
import { EditRecipiesComponent } from "./recipies/edit-recipies/edit-recipies.component";

const Approutes: Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecipiesComponent, children: [
        {path:'', component:RecipiesStartComponent},
        {path:'new',component:EditRecipiesComponent},
        {path:':id',component:RecipiesDetailsComponent},
        {path:':id/edit',component:EditRecipiesComponent},
    ]},
    {path:'shopping', component:ShoppingComponent}
]
@NgModule(
    {
        imports:[RouterModule.forRoot(Approutes)],
        exports:[RouterModule]
    }
)
export class AppRouterModule{

}