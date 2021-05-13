import { Router } from 'express';

const userRouter: Router = Router();

userRouter.post('/', function(req, res) {
    res.json('create user')
});

export { userRouter };
