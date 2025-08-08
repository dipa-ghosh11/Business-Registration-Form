import { createForm, getUsers } from "../controllers/form.controllers.js"

import express from "express"

const router=express.Router();
router.post('/createform', createForm);
router.get('/getusers', getUsers)

export default router;