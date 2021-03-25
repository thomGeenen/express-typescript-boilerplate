import express from "express";
import * as http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import bodyParser from "body-parser";

express.urlencoded({extended: true});
express.json();

const app = express();
const server = new http.Server(app);

app.use(cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(morgan("dev"));

server.listen(8181, () => {
    console.log("server running")
})


