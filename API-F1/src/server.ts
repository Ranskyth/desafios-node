import fastify from "fastify"
import cors from "@fastify/cors"

const server = fastify()

server.register(cors, {
    origin: "*"
})

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
    { id: 3, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 4, name: "George Russell", team: "Mercedes" },
    { id: 5, name: "Charles Leclerc", team: "Ferrari" },
    { id: 6, name: "Carlos Sainz", team: "Ferrari" },
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Lance Stroll", team: "Aston Martin" },
    { id: 12, name: "Esteban Ocon", team: "Alpine" },
    { id: 13, name: "Pierre Gasly", team: "Alpine" },
    { id: 14, name: "Valtteri Bottas", team: "Alfa Romeo" },
    { id: 15, name: "Guanyu Zhou", team: "Alfa Romeo" },
    { id: 16, name: "Nyck de Vries", team: "AlphaTauri" },
    { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri" },
    { id: 18, name: "Kevin Magnussen", team: "Haas" },
    { id: 19, name: "Nikita Mazepin", team: "Haas" },
    { id: 20, name: "Nicholas Latifi", team: "Williams" },
    { id: 21, name: "Alex Albon", team: "Williams" }
];

const teams = [
    { id: 1, name: "Ferrari" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Red Bull Racing" },
    { id: 4, name: "McLaren" },
    { id: 5, name: "Aston Martin" },
    { id: 6, name: "Alpine" },
    { id: 7, name: "Alfa Romeo" },
    { id: 8, name: "Haas" },
    { id: 9, name: "AlphaTauri" },
    { id: 10, name: "Williams" }
];


interface DriverParams{
    id:string
}

server.get("/teams", async(req, res)=>{
    res.type("application/json").code(200)
    return {teams}
})

server.get("/drivers", async(req, res) => {
    res.type("application/json").code(200)
    return {drivers}
})

server.get<{Params:DriverParams}>("/drivers/:id", async(req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find(d => d.id === id)
    if(!driver){
        res.type("application/json").code(404)
        return {message: "error 404 driver"}
    }else{
        res.type("application/json").code(200)
        return {driver}
    }
})

server.listen({port:3333}, ()=>{
    console.log("server on")
})