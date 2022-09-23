import DatabaseConfig from "./configurations/DatabaseConfig";

class Server {
    public startServer():void {
        DatabaseConfig.connect();
    }
}

new Server().startServer();