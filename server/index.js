import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import multer from "multer"
import path from "path"
import { fileURLToPath } from "url"

// конфигурација:

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyparser.json({ limit: "30mb", extended: true }))
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

//File storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {   
        cb(null, 'public/assets')
    },  
    filename: function(req, file, cb)  {
        cd(null, file.originalname)
    }
 });
 const upload = multer({ storage });

 //mongoose

 const PORT = process.env.PORT || 6000;
 mongosse.connect(process.env.MONGO_URL, {
    userNewUrlParser
 })
