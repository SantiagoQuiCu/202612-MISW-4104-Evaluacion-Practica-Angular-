export class Usuario {
    id: number;
    username: string;
    name: string;
    email: string;
    avatarUrl: string;
    role: string;
    location: string;
    repoIds: Array<number>;

    constructor( id: number,username: string, name: string, email: string,avatarUrl: string,role: string,location: string,repoIds:Array<number>){
        this.id =id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.avatarUrl=avatarUrl;
        this.role = role;
        this.location = location;
        this.repoIds= repoIds;
    }
}
