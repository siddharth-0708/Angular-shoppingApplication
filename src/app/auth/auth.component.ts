import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector:'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
    isLoginMode = true;
    error: string = null;

    constructor(private authService: AuthService, private route: Router){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode
    }
    onSubmit(form:NgForm){
        const email = form.value.email;
        const password = form.value.password;
        if(this.isLoginMode){
            this.authService.onLogin(email,password).subscribe(response =>{
                this.route.navigate(['/recipes'])
            },error=> {
                this.error = error.error.error.message
            })
        }else{
            this.authService.signUp(email, password).subscribe(response =>{
                this.route.navigate(['/recipes'])
            },error=> {
                this.error = error.error.error.message
            })
        }
        form.reset()
    }

}