import {PersistenceType} from "../PersistenceType";
import {version} from './version';

export const environment = {
    production: true,
    persistence: PersistenceType.LOCAL,
    version: version
};
