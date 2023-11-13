import express from "express";
import cors from "cors";
import rotasUsuario from "./rotasUsuario.js";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/usuario", rotasUsuario)


app.listen(8080)

