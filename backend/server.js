const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("Backend Running");
});
app.use((req,res,next)=>{

    req.io = io;

    next();
});

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const projectRoutes =require("./routes/projectRoutes");
app.use("/api/projects",projectRoutes);
const activityRoutes = require("./routes/activityRoutes");
app.use(
    "/api/activities",
    activityRoutes
);

const http = require("http");

const { Server } = require("socket.io");


const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server,{

    cors:{
        origin:"http://localhost:5173"
    }
});

io.on("connection",(socket)=>{

    console.log("User Connected");
});

server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});