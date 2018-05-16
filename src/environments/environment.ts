// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {PersistenceType} from "../PersistenceType";
import {version} from "./version";

export const environment = {
    production: false,
    persistence: PersistenceType.LOCAL,
    version: version,
    loginURL: "https://discordapp.com/api/oauth2/authorize?client_id=406607705952747530&redirect_uri=http%3A%2F%2Flocalhost%3A4567%2Fcallback.html&response_type=token&scope=identify%20guilds%20email",
    serverBase: "http://localhost:4567/api"
};
