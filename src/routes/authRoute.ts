import { Request, Response } from "express";
import UserService from "../services/userService";
import AuthService from "../services/authService";
import LoginDTO from "../types/dto/loginDTO";


export const handleSigninRequset = async(
    req:Request<any,any,LoginDTO>,
    res:Response
):Promise<void>=>{
    try {
        const result = await AuthService.login(req.body);
        res.status(result.status!).json(result);   
    } catch (error) {
        
    }
}