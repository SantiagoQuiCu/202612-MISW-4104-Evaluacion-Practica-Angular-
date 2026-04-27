export class Repositorio {
    id: number;
    name: string;
    description: string;
    language: string;
    stars: number;
    createAt : Date;

    constructor(id:number,name:string, description:string, language:string, stars:number, createAt:Date){
        this.id = id;
        this.name= name;
        this.description=description;
        this.language = language;
        this.stars = stars;
        this.createAt= createAt;
    }
}
