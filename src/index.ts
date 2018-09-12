import InfraWeb from './core/infra-web'
export default class Server extends InfraWeb {
    constructor() {
        super()
    }
    public static bootstrap(): Server {
        return new Server
    }
}
Server.bootstrap().startServer()