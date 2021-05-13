import { Router, Request, Response } from 'express';

const studentRouter: Router = Router();

studentRouter.post('/', function(_req: Request, res: Response) {
    res.json('create user')
});

export { studentRouter };
