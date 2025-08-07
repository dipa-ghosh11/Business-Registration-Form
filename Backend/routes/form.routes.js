import { createForm } from "../controllers/form.controllers.js"

import express from "express"

const router=express.Router();
router.post('/createform', createForm);

export default router;