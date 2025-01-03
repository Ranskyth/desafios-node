import express from "express"
import { routes } from "./routes";

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () =>{
    console.log(`Server On in Port ${PORT}`)
});

function cors(): any {
    throw new Error("Function not implemented.");
}
