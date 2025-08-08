import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection  from './database/dbConnection.js';
import router from './routes/form.routes.js';

const app=express();
dotenv.config({path:"./.env"});

app.use(express.json());
app.use(cors('*'));
app.use(express.urlencoded({ extended: true }))


dbConnection(); 
app.use('/api', router);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});