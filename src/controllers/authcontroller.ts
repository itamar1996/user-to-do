import { Request, Response, response, Router } from "express";
import LoginDTO from "../types/dto/loginDTO";
import { handleSignUp } from "../routes/userRoute";
import { handleSigninRequset } from "../routes/authRoute";

const router : Router = Router();


router.post("/login", handleSigninRequset);

router.delete('./logout',()=>{})

export default router