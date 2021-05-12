import { __production__, DB_HOST, DB_DIALECT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } from '../../../env/variables';

const dabataseConnectionOptions = {
    development: {
        type: DB_DIALECT,
        database: DB_NAME,
        port: DB_PORT,
        host: DB_HOST,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: false,
        synchronize: true,
        entities: [] as any[]
    },
    production: {
        type: DB_DIALECT,
        database: DB_NAME,
        port: DB_PORT,
        host: DB_HOST,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: !__production__,
        synchronize: true,
        entities: [] as any[]
    }
};

export { dabataseConnectionOptions };