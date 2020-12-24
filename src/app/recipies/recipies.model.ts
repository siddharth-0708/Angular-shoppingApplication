export class recipe {
    public name:string;
    public description:string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath:string){ //every class has a constructor and it runs when the instance of class is run
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
