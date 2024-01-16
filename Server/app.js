const express = require ("express");
const dotenv = require("dotenv")
const connnectDB = require("./Utils/dbConfig")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Router = require("./Routes/productRoute")
dotenv.config();
connnectDB();
const app = express();

const PORT = process.env.PORT || 5000 ;

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/",Router);


app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`))