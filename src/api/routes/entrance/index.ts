import { Controller } from './controller'
export const Entrance: any = {
    index: {
        verb: 'get',
        endPoint: '/',
        handler: Controller.home
    },
    createEntrance: {
        verb: 'post',
        endPoint: '/newEntrance',
        handler: Controller.createEntrance
    },
    getEntrances: {
        verb: 'get',
        endPoint: '/entrance',
        handler: Controller.entrances
    }
}