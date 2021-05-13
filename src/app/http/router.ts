import { Router, Request, Response } from 'express';
import { userRouter } from '../../modules/user/userRouter';

const v1Router: Router = Router();

v1Router.get('/', function(_req: Request, res: Response) {
    res.json({ message: 'Welcome to Skill API!' })
});

v1Router.use('/user', userRouter);

v1Router.use('*', function (_req: Request, res: Response) {
    res.send('[ERROR]: Resource not found!')
});

export { v1Router };