import { BadRequest, Created, NoContent, Ok } from "../utils/http-helper"
import { CreatePlayer, DeletePlayer, FindAllPlayers, FindPlayerById } from "../Repositories/PlayersRepositorys";
import { PlayerModel } from "../Models/PlayerModel";

export const GetPlayerServices = async () => {
    const data = await FindAllPlayers()
    let response = null;
    if(data){
        response = await Ok(data)
    }else{
        response = await NoContent()
    }

    return response
}

export const GetPlayerByIdServices = async (id:number) => {
    const data = await FindPlayerById(id)
    let response = null;

    if(data){
        response = await Ok(data)
    }else{
        response = await NoContent()
    }

    return response
}

export const PostPlayerServices = async (Player:PlayerModel) => {
    const data:any = await CreatePlayer(Player)
    let response = null;
    if(Object.keys(data).length !== 0){
        console.log("Player Ok")
        response = await Created(data)
    }else{
        console.log("Player Bad Request")
        response = await BadRequest()
    }

    return response
}

export const DeletePlayerServices = async (id:number) => {
    const data = await DeletePlayer(id)  
    let response = null;
    if(data){
        response = await NoContent()
    }else{
        response = await BadRequest()
    }
    return response
}