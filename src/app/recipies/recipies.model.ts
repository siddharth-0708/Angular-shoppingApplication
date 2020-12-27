import { ingrediant } from '../shared/ingrediant.model';

export class recipe {
    public name:string;
    public description:string;
    public imagePath: string;
    public ingrediants: ingrediant[];

    constructor(name:string, desc:string, imagePath:string, ingrediants:ingrediant[]){ //every class has a constructor and it runs when the instance of class is run
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants;
    }
}
