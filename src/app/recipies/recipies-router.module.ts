import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipiesComponent } from "./recipies.component";
import { RecipiesStartComponent } from './recipies-start/recipies-start.component';

const Recipieroutes: Routes = [
    {path:'recipes/:id', component:RecipiesComponent},
]
@NgModule(
    {
        imports:[RouterModule.forRoot(Recipieroutes)],
        exports:[RouterModule],
        declarations: [RecipiesStartComponent]
    }
)
export class RecipieRouterModule{

}