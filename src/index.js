import express  from "express";
import { PORT } from "./config/config.js";
import ProductRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors"
import userRouter from "./routes/users.routes.js";
import privateRouter from "./routes/private.route.js";
import comprobacionJwt from "./middleware/comprobacionJwt.js";
import "./db/db_connection.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//Rutas
app.use("/api",userRouter)
app.use("/api", comprobacionJwt, privateRouter)

// endopoint
// http://localhost:8080/api/admin


app.use(ProductRoutes)

app.get("/", (req, res)=>{
    res.send("Bienvenido a la API de la comision 79i")
})

app.listen(PORT, async()=>{
    console.log(`La aplicación esta escuchando el puerto ${PORT}`)
})

// ========================================================================================================

// Tarea 11/03/2024

// Crear el endpoint getProductByCategory (ruta y controlador) y debe devolver los productos con la categoria recibida por parametro.
// Crear el endpoint sortProductByPrice que debe recibir un parametro que puede adoptar los valores de "asc" o "desc", 
// y debe devolver los productos ordenados por precio.

// Debe tener en consideración casos de error, productos no encontrados o parametro recibido incorrecto. 

// ========================================================================================================

//Tarea 13/03/2024

//Refactorizar los dos endpoints de la tarea de la clase anterior (getProductByCategory, sortProductByPrice) utilizando metodos de mongoose.