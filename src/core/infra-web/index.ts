import express from 'express'
import http from 'http'
const port = 3000
export default class InfraWeb {
    public app: express.Application
    private server: any
    constructor() {
        this.app = express()
        this.app.get('/', (req, res) => {
            res.send('Hello bitch')
        })
    }
    public startServer() {
        this.server = http.createServer(this.app)
        this.server.listen(port, () => {
            console.log(`Running at http://localhost:${port}/`)
        })
    }
}