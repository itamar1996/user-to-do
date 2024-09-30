import { Request, Response, response, Router } from "express";
import { handleSignUp } from "../routes/userRoute";
import SignUpDTO from "../types/dto/signupDTO";

const router : Router = Router();

router.post("/signup", handleSignUp);


router.get('./',()=>{})

router.get('./:id',()=>{})

router.post('./',()=>{})

router.patch('./:id',()=>{})

router.delete('./:id',()=>{})




export default router