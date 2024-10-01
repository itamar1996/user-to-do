import { Request, Response, response, Router } from "express";
import { handleProfileRequest, handleSignUp } from "../routes/userRoute";
import SignUpDTO from "../types/dto/signupDTO";
import verifyUser from "../middllwhers/verifyUser";

const router : Router = Router();

router.post("/signup", handleSignUp);

router.get("/profile",verifyUser, handleProfileRequest);

router.get('./',()=>{})

router.get('./:id',()=>{})

router.post('./',()=>{})

router.patch('./:id',()=>{})

router.delete('./:id',()=>{})




export default router