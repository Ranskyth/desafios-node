import { Router } from "express";
import { 
    DeletePlayer,
    GetPlayer, 
    GetPlayerById, 
    PostPlayer, 
  
} from "./Controllers/PlayersControllers";

export const routes = Router()

routes.get("/users", GetPlayer)
routes.get("/users/:id", GetPlayerById)
routes.post("/users", PostPlayer)
routes.delete("/users/:id", DeletePlayer)
