import express from 'express';
import morgan from 'morgan';

export const createServer = async function(): Promise<express.Application> {
    
    const app: express.Application = express();

    app.use(express.json());
    app.use(morgan('dev'));

    app.listen(5000, function() {
        console.log('[API]: started [PORT]: 5000');
    });

    return app;
}