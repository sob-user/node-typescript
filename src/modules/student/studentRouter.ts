import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const studentRouter: Router = Router();

function fieldValidator(req, res, next) {
    body('email').isEmail()
    req.errorsBodyFieldsValidator = validationResult(req);
    next();
}

studentRouter.post('/', fieldValidator, async (req: Request, res: Response) => {

    // const fieldValue =  req.errorsBodyFieldsValidator.array()[0].value;
    // const fieldName =  req.errorsBodyFieldsValidator.array()[0].param;
    console.log(req.errorsBodyFieldsValidator)

    // if(!errorsBodyFieldsValidator.isEmpty()) {
    //     res.status(400).json({ msg: fieldValue + ' is not an valid ' + fieldName });
    // }

    res.json('student created with success!')

});

export { studentRouter };
