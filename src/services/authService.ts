import { users } from "../data/data"
import LoginDTO from "../types/dto/loginDTO"
import ResponseData from "../types/dto/responce";
import SigninResponseDTO from "../types/dto/signinResponseDTO";
import TokenPayloadDTO from "../types/dto/tokenPayloadDTO"
import jwt from "jsonwebtoken";



export default class AuthService {
    public static async login(userData:LoginDTO): Promise<ResponseData<SigninResponseDTO|unknown>>{
        try {
        const { username, password } = userData
        console.log("name",password);
        
        if(!password||!username)
            {
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
        const user = users.find(u=>u.username == username)
        if (!user)
            {
                return {
                    err:true,
                    message:"user not found",
                    status:400
                }
            }            
        if(!await user.comparePassword(password)){
                    return {
                        err:true,
                        message:"wrong password",
                        status:401
                }        
            } 
        const payload:TokenPayloadDTO = {
            username,
            id: user.id,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn:"10m"
          })          
          return {
            err:false,
            status:200,
            data:{
                token
            }
          }
        }
        catch(error)
        {
            return {
                err: true,
                message: "Missing madatory data",
                status: 500,
                data:error
              };
        }
    }

}