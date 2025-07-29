const mysql = require("mysql2/promise");
const express = require("express");
const  dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, Images)
app.use(express.static("public"));

async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_Host,
      user: process.env.MYSQL_User,
      password: process.env.MYSQL_Password,
      database: process.env.MYSQL_Database,
    });

    console.log("Connected to MySQL successfully!");
    return connection;
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
}

connectDB();+

app.get("/Library", async (req, res) => {
  try {
    const connection = await connectDB();
    const [playlist] = await connection.execute("SELECT * FROM Playlist"); // Replace 'songs' with your table name
    const [artist] = await connection.execute("SELECT * FROM Artist ");
    res.render("index"); 
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/Library_data", async (req, res) => {
  try {
    const connection = await connectDB();
    const [playlist] = await connection.execute("SELECT * FROM Playlist"); // Replace 'songs' with your table name
    const [artist] = await connection.execute("SELECT * FROM Artist ");
    res.send({ playlist, artist }); 
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  })

app.listen(5000, () => {
  console.log("Server is up and running on 5000 ...");
});