import { createServer } from './app/http/app';
import { createConnection } from 'typeorm';
import { typeORMConfig } from './app/database/typeorm/index'

createConnection(typeORMConfig).then(function() {
    console.log('[DATABASE]: connected')
    createServer();
    
}).catch(function(error) {
    console.log(error);
});