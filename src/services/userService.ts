import { users } from "../data/data";
import ResponseData from "../types/dto/responce";
import SignUpDTO from "../types/dto/signupDTO";
import User from "../types/nodels/user";

export default class UserService{
    public static async signup(user:SignUpDTO):Promise<ResponseData<{id:string}>>{
        try {
            const {username,password} = user
            if(!password||!username)
            {
                console.log("missing detles");
                
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
            const newuser = new User(username);
            users.push(newuser)
            await newuser.hashPassword(password);
            return {
                err:false,
                message:"user sign up ",
                status:201,
                data:{id : newuser.id}

            }
        } catch (error) {
            return {
                err:true,
                status:500,
                data:error
            }
        }
    }
    public static getAllUsers(): User[] {
        return users;
      }
    
      public static getUserById(id: string): User|undefined {
        return users.find((u) => u.id === id);
      }
    }