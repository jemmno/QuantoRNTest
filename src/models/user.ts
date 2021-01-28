export interface iUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
}

export default class User implements iUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    get_full_name?: any = () => {
        return `${this.first_name} ${this.last_name}`
    }

    constructor(obj: User) {
        this.id = obj.id;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.avatar = obj.avatar;
    }
}