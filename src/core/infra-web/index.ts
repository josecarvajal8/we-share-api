import express from 'express'
import http from 'http'
const port = 3000
export default class InfraWeb {
    public app: any
    private server: any
    constructor() {
        this.app = express()
    }
    public mountRoutes(router: any): void {
        Object.keys(router).forEach((key) => {
            this.app[router[key].verb](router[key].endPoint, router[key].handler)
        })
    }
    public startServer(): void {
        this.server = http.createServer(this.app)
        this.server.listen(port, () => {
            console.log(`Running at http://localhost:${port}/`)
        })
    }
}