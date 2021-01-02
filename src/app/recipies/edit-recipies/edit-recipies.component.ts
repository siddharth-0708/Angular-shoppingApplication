import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ingrediant } from 'src/app/shared/ingrediant.model';
import { recipe } from '../recipies.model';
import {RecipiesService} from '../recipies.service';
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-edit-recipies',
  templateUrl: './edit-recipies.component.html',
  styleUrls: ['./edit-recipies.component.css']
})
export class EditRecipiesComponent implements OnInit {
  id:number;
  editMode = false;
  recipieForm: FormGroup

  constructor(private route: ActivatedRoute, private recipieServices: RecipiesService,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params["id"]
        this.editMode = params['id'] != null;
        this.initForm()
      }
    );
  }
  onSubmit(){
      const newRecipe = new recipe(
      this.recipieForm.value['name'],
      this.recipieForm.value['description'],
      this.recipieForm.value['imagePath'],
      this.recipieForm.value['ingrediants']);
      if(this.editMode){
        this.recipieServices.updateRecipie(this.id, newRecipe)
      } else{
        this.recipieServices.addRecipie(newRecipe);
      }
      this.onCancel()
  }
  get controls() { // a getter!
    return (<FormArray>this.recipieForm.get('ingrediants')).controls;
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  private initForm() {
    let recipieName = ''
    let recipieImagePath = ''
    let recipieDescription = ''
    let recipieIngrediants = new FormArray([])

    if(this.editMode){
      const recipie = this.recipieServices.getRecipe(this.id)
      recipieName = recipie.name
      recipieImagePath = recipie.imagePath
      recipieDescription = recipie.description
      if(recipie['ingrediants']){
        for(let ing of recipie.ingrediants){
          recipieIngrediants.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, Validators.required),
            })
          )
        }
      }
    }
    this.recipieForm = new FormGroup({
      'name': new FormControl(recipieName, Validators.required),
      'imagePath': new FormControl(recipieImagePath, Validators.required),
      'description': new FormControl(recipieDescription, Validators.required),
      'ingrediants': recipieIngrediants
    })
  }
}
