import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { RecipiesService } from "../recipies/recipies.service";
import { recipe } from '../recipies/recipies.model';
import {map} from 'rxjs/operators'

@Injectable()
export class DataStorageService{
constructor(private http: HttpClient, private recipieService: RecipiesService){}
storeRecipie(){
    const recipies = this.recipieService.getRecipies()
    this.http.put('https://recipie-book-f1b71-default-rtdb.firebaseio.com/recipies.json', recipies).subscribe(response =>{
        console.log(response)
    })
    }
fetchRecipie(){
    this.http.get<recipe[]>('https://recipie-book-f1b71-default-rtdb.firebaseio.com/recipies.json')
        .subscribe(recipies =>{
        this.recipieService.setRecipies(recipies)
        })
    }
}