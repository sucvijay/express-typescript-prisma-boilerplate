import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import userRouter from './routes/userRoutes';
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.use('/users', userRouter);



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});