import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "GETAway6082!",
  database: "miniproject",
});

app.use(express.json());
app.use(cors());

app.listen(8888, () => {
  console.log("connect to backend");
});
