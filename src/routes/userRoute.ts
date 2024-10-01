import { Request, Response } from "express";
import SignUpDTO from "../types/dto/signupDTO";
import UserService from "../services/userService";

export const handleSignUp = async (
    req:Request<any,any,SignUpDTO>,
    res :Response
): Promise<void> => {
    try {
        const result =  await UserService.signup(req.body);
        res.status(result.status).json(result)
    } catch (error) {
        console.log(error);
    }
};

export const handleProfileRequest = (req: Request, res: Response):void => {
    const result = {
      err: false,
      // @ts-ignore
      data: UserService.getUserById(req.user.id),
      status: 200,
    };
    res.json(result);
  };


