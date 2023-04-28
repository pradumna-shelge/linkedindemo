export interface userInterfaces{
    id:number,
    userName?:string,
    name?:string,
    image?:string,
    email?:string,
    password?:string,
    post?:Post[],
    connection:number[]
}

export interface Post{

header?:string,
like:boolean;
media?:string;
}
export interface loginInterface{
    username:string,
    password:string
}

