import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import post from "./routes/index.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import http from "http"


dotenv.config()

const app = express()


app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(bodyParser.json({ limit: "200mb" }))
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }))
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")))
app.use("/", post)


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB bağlantısı kuruldu"))
  .catch((err) => console.log("❌ Bağlantı hatası:", err))


const server = http.createServer(app)

const PORT = process.env.PORT || 5233
server.listen(PORT, () => {
  console.log(`🚀 Server çalışıyor: http://localhost:${PORT}`)
})
