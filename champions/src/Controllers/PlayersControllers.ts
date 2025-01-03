import { Request, Response } from 'express'
import { DeletePlayerServices, GetPlayerByIdServices, GetPlayerServices, PostPlayerServices, } from '../Services/PlayersServices'

export const GetPlayer = async(req:Request, res:Response) => {
    const httpResponse = await GetPlayerServices()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const GetPlayerById = async(req:Request, res:Response) => {
    const id = req.params.id
    const httpResponse = await GetPlayerByIdServices(Number(id))

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const PostPlayer = async(req:Request, res:Response) => {
    const Player = req.body
    const httpResponse:any = await PostPlayerServices(Player)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
export const DeletePlayer = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await DeletePlayerServices(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
