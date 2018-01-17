import {PersistenceType} from "../PersistenceType";


declare const require: any;

export const environment = {
    production: true,
    persistence: PersistenceType.LOCAL,
    version: require('../../package.json').version
};
