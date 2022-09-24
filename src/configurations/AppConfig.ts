import express, { Express, json } from "express";
import cors from "cors";

export default class App {
    private app: Express;

    constructor () {
        this.app = express();
        this.configApp();
        this.configRoutes();
    }

    private configApp():void {
        this.app.use( json() );
        this.app.use( cors() );
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private configRoutes(): void {
        
    }

    public getApp(): Express {
        return this.app;
    }
}