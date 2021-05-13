import { dabataseConnectionOptions } from './config';
import { entities } from './entities';
import { __production__, NODE_ENV } from '../../../env/variables'

const typeORMConfig: any = dabataseConnectionOptions[NODE_ENV];
typeORMConfig.entities = entities;

export { typeORMConfig };