import express from 'express';
import morgan from 'morgan';
import { API_PORT, API_BASE_URL } from '../../env/variables';
import { v1Router } from './router';

export const createServer = async function(): Promise<express.Application> {
    
    const app: express.Application = express();

    app.use(express.json());
    app.use(morgan('dev'));

    app.use(`${API_BASE_URL}`, v1Router);

    app.listen(API_PORT, function() {
        console.log('[API]: started [PORT]: ' + API_PORT);
    });

    return app;
}