import { PlayerModel } from "../Models/PlayerModel";

const database: PlayerModel[] = [
    {id: 1, name: 'Messi'},
    {id: 2, name: "Ronaldo"},
]

export const FindAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const FindPlayerById = async (id:number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const CreatePlayer = async (player:PlayerModel): Promise<PlayerModel> => {
    console.log("Player created")
    database.push(player)
    return player
}

export const DeletePlayer = async (id:number): Promise<PlayerModel|null|number> => {
    const index = database.findIndex((player) => player.id === id)
    database.splice(index, 1)
    return index
}