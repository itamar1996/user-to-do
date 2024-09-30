import Todo from "../types/nodels/todo";
import User from "../types/nodels/user";

export const users : User[] = [];
export const todos : Todo[] = [];

(async():Promise<void>=>{
    const jony : User = new User("jony")
    jony.hashPassword("1234")
    
    const clean :Todo = new Todo("clean the house",jony.id)
    const makefood :Todo = new Todo("cook some food",jony.id)
    users.push(jony);
    todos.push(clean,makefood)
})()

