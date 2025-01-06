import express, { Express, Request, Response } from "express";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('A group of users');
});

router.post('/', (req: Request, res: Response) => {
  const newUser = req.body;
  res.status(201).send(newUser);
});

export default router;