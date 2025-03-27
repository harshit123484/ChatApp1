import express from "express"
import { getMessage, sendMessage } from "../controller/message.controller.js";
import secureRoute from "../middleware/secureRoute.js";


const router=express.Router();
router.post("/send/:id",secureRoute,sendMessage); // secureRoute work that ki jis user ka pass token ha vohi acess
router.get("/get/:id",secureRoute,getMessage);



export default router;

