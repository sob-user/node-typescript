import { Router, Request, Response } from 'express';

const v1Router: Router = Router();

v1Router.get('/', function(_req: Request, res: Response) {
    res.json({ message: 'Welcome to Skill API!' })
});

export { v1Router };