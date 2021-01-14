import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { user } from "./user.model";
import {environment} from "../../environments/environment"

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
    userEmitter = new BehaviorSubject<user>(null); // can be also accessed after emitted anywhere(data that was emitted)

    constructor(private http: HttpClient){}
    private tokenExpire :any

    signUp(email: string, password: string){
        return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.fireBaseAPIkey,{
            email: email, //<authResponse> which kind of data will come back
            password: password,
            returnSecureToken: true
        }).pipe(tap(response => {
            const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
             const userData = new user(response.email, response.localId, response.idToken, expirationDate)
             this.userEmitter.next(userData)
             this.autoLogout(+response.expiresIn * 1000)
             localStorage.setItem('userData', JSON.stringify(userData))
        }))
    }
    autoLogin(){
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return;
        }
        const loadUser = new user(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))
        if(loadUser.token){
            const duration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
            this.autoLogout(duration)
            this.userEmitter.next(loadUser);
        }
    }
    autoLogout(expire: number){
        this.tokenExpire =  setTimeout(() => {
            this.onLogout();
        }, expire);
    }
    onLogout(){
        this.userEmitter.next(null);
        localStorage.clear()
        if(this.tokenExpire){
            clearTimeout(this.tokenExpire)
        }
    }
    onLogin(email: string, password:string){
        return this.http.post<authResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.fireBaseAPIkey,{
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap(response => {
            const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
             const userData = new user(response.email, response.localId, response.idToken, expirationDate)
             this.userEmitter.next(userData)
             this.autoLogout(+response.expiresIn * 1000)
             localStorage.setItem('userData', JSON.stringify(userData))
        }))
    }
}