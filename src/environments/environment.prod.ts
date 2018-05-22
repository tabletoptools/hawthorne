import {PersistenceType} from "../PersistenceType";
import {version} from './version';

export const environment = {
    production: true,
    persistence: PersistenceType.LOCAL,
    version: version,
    loginURL: "https://discordapp.com/api/oauth2/authorize?client_id=406607705952747530&redirect_uri=https%3A%2F%2Ftabletoptools.github.io%2Fhawthorne%2Fcallback.html&response_type=token&scope=identify%20guilds%20email",
    serverBase: "https://api.dnapolian.com"
};
