export const Entrance: any = {
    index: {
        verb: 'get',
        endPoint: '/',
        handler: console.log('hello world')
    },
    createEntrance: {
        verb: 'post',
        endPoint: '/newEntrance',
        handler: console.log('hello new')
    },
    getEntrances: {
        verb: 'get',
        endPoint: '/entrance',
        handler: console.log('I will send u')
    }
}