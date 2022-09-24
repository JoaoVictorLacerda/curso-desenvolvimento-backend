/* eslint-disable no-console */
import DatabaseConfig from "./configurations/DatabaseConfig";
import { Express } from "express";
import os from "os";
import DotenvComponent from "./components/DotEnvComponent";
import App from "./configurations/AppConfig";

class Server {

    private server: Express;

    constructor (){
        const app = new App();
        this.server = app.getApp();
    }
    public startServer():void {
        DatabaseConfig.connect();
        this.server.listen(DotenvComponent.API_PORT,Server.showTheSystemInformation);
    }

    private static showTheSystemInformation():void {
        const arch = os.arch();
        const plataform = os.platform();
        const type = os.type();
        const mem = os.totalmem();
        const cpus = os.cpus();

        console.log(`SERVICE RUNNING ON PORT: ${DotenvComponent.API_PORT}`);
        console.log(`SO: ${type} ${plataform} ${arch}`);
        console.log(`RAM: ${Math.floor(mem * (10 ** -9))} GB`);
        console.log(`CORES: ${cpus.length}`);
        console.log(`CPU: ${cpus[0].model}`);
    }
}

new Server().startServer();