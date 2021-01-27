interface User {
    id? : number,
    first_name? : string,
    last_name? : string,
    email? : string,
    avatar? : string,
    get_full_name ? : any
}

// class User implements iUser {
//     id? : number;
//     first_name? : string;
//     last_name? : string;
//     email? : string;
//     avatar? : string;
//     get_full_name ? : any = () => {
//         return `${this.first_name} ${this.last_name}`
//     }

//     constructor(obj: iUser){
//         this.id = obj.id;
//         this.first_name = obj.first_name;
//         this.last_name = obj.last_name;
//         this.email = obj.email;
//         this.avatar = obj.avatar;
//     }
// }
export default User;