import InfraWeb from './core/infra-web'
import { routesApi } from './api/routes'
export default class Server extends InfraWeb {
    constructor() {
        super()
        console.log('routes', routesApi)
    }
    public static bootstrap(): Server {
        return new Server
    }
}
Server.bootstrap().startServer()