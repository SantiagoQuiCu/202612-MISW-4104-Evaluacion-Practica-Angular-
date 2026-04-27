export class Usuario {
    id: number;
    userName: string;
    name: string;
    email: string;
    avatarUrl: string;
    role: string;
    location: string;

    constructor( id: number,userName: string, name: string, email: string,avatarUrl: string,role: string,location: string){
        this.id =id;
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.avatarUrl=avatarUrl;
        this.role = role;
        this.location = location;
        
    }
}
