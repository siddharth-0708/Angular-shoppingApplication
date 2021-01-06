import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { RecipiesService } from "../recipies/recipies.service";
import { recipe } from '../recipies/recipies.model';
import {map,take} from 'rxjs/operators'
import { AuthService } from "../auth/auth.service";
import { user } from "../auth/user.model";

@Injectable()
export class DataStorageService{
userNew = null;
constructor(private http: HttpClient, private recipieService: RecipiesService, private authService: AuthService){}
storeRecipie(){
    this.authService.userEmitter.pipe(take(1)).subscribe(userData =>{
        this.userNew = userData;
        }) //take 1 user from useremitter and unsubscribe(take meanning)
        
    const recipies = this.recipieService.getRecipies()
    this.http.put('https://recipie-book-f1b71-default-rtdb.firebaseio.com/recipies.json', recipies,{
        params: new HttpParams().set('auth', this.userNew.token)

    }).subscribe(response =>{
        console.log(response)
    })
    }
fetchRecipie(){

     this.authService.userEmitter.pipe(take(1)).subscribe(userData =>{
        this.userNew = userData;
        }) //take 1 user from useremitter and unsubscribe(take meanning)
    
        this.http.get<recipe[]>('https://recipie-book-f1b71-default-rtdb.firebaseio.com/recipies.json',{
            params: new HttpParams().set('auth', this.userNew.token)
        })
        .subscribe(recipies =>{
        this.recipieService.setRecipies(recipies)
        })
    }
}