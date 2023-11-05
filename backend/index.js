const express = require("express"),
  path = require("path");

const app = express();

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.PGURI,
});

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM family_tree");
  response.send(rows);
});

app.post("/api/addFamilyMember", (request, response) => {
  const { name, age, role } = request.body;
  const postgres =
    "INSERT INTO family_tree (name, age, role) VALUES ($1, $2, $3)";
  const values = [name, age, role];

  pool.query(postgres, values, (error, result) => {
    if (error) {
      console.error(
        "Det uppstod ett fel när familjemedlemmen skulle registreras: ",
        error
      );
      response
        .status(500)
        .send("Det uppstod ett fel när familjemedlemmen skulle registreras.");
    } else {
      console.log("Familjemedlemmen är tillagd :) ");
      response.status(201).send("Familjemedlemmen är tillagd :) ");
    }
  });
});

app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
