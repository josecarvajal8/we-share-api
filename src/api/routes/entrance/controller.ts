import { Request, Response } from 'express'
export const Controller = {
    home: (req: Request, res: Response) => res.send('home endpoint'),
    createEntrance: (req: Request, res: Response) => res.send('new entrance endpoint'),
    entrances: (req: Request, res: Response) => res.send('returning entrances')
}