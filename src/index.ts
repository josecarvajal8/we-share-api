import InfraWeb from './core/infra-web'
import { routesApi } from './api/routes'
export default class Server extends InfraWeb {
    constructor() {
        super()
        this.mountRoutes(routesApi)
    }
    public static bootstrap(): Server {
        return new Server
    }
}
Server.bootstrap().startServer()