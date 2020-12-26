import { Directive, HostBinding, HostListener } from "@angular/core";
@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false //telling angular that where this directive sits, execute class.open when the variable isOpen is true. The directive will be attached whenever the variavle is true and detached when it is false
    @HostListener('click') toggleOpen(){ //The variable is made true/false on click
        this.isOpen = !this.isOpen
    }
}