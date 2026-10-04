const express = require('express');
const connectDB = require('../src/config/database');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

connectDB();


/* Use the all routes here */
app.use("/api/auth", authRouter);

module.exports = app;