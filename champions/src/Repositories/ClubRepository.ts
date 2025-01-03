import { ClubModel } from "../Models/ClubModel";

const ClubData:ClubModel[] = [
    {id: 1, name: 'Barcelona'},
    {id: 2, name: "Real Madrid"},
]

export const FindAllClubs = async (): Promise<ClubModel[]> => {
    return ClubData
}

export const FindClubById = async (id:number): Promise<ClubModel | undefined> => {
    return ClubData.find((club) => club.id === id)
}