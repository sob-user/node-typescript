import express from 'express';
import morgan from 'morgan';
import { API_PORT } from '../../env/variables';

export const createServer = async function(): Promise<express.Application> {
    
    const app: express.Application = express();

    app.use(express.json());
    app.use(morgan('dev'));

    app.listen(API_PORT, function() {
        console.log('[API]: started [PORT]: ' + API_PORT);
    });

    return app;
}