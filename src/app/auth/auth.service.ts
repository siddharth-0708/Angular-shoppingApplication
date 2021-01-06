import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { user } from "./user.model";

interface authResponse {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered? : boolean
}

@Injectable({providedIn: 'root'})
export class AuthService{
    userEmitter = new Subject<user>();

    constructor(private http: HttpClient){}

    signUp(email: string, password: string){
        return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWVxkVniqFpTLClVRjoElCEGw6D61RpoY',{
            email: email, //<authResponse> which kind of data will come back
            password: password,
            returnSecureToken: true
        }).pipe(tap(response => {
            const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
             const userData = new user(response.email, response.localId, response.idToken, expirationDate)
             this.userEmitter.next(userData)
        }))
    }
    onLogin(email: string, password:string){
        return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWVxkVniqFpTLClVRjoElCEGw6D61RpoY',{
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(response => {
            const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
             const userData = new user(response.email, response.localId, response.idToken, expirationDate)
             this.userEmitter.next(userData)
        }))
    }
}