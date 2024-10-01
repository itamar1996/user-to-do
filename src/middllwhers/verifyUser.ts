import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import TokenPayloadDTO from "../types/dto//tokenPayloadDTO";

const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      // @ts-ignore
      const token: string = req.headers?.["authorization"] || "";
        const decoded: TokenPayloadDTO = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as TokenPayloadDTO;
      console.log(decoded);
      
      //@ts-ignore
      req.user = decoded
      next()
    } catch (err) {
      console.log(err)
      res.sendStatus(401)
    }
  };

  export default verifyUser;
