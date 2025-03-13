const mysql = require("mysql2/promise");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

// Serve static files (CSS, JS, Images)
app.use(express.static("public"));

async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Node2023ucp1977",
      database: "Spotify",
    });

    console.log("Connected to MySQL successfully!");
    return connection;
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
}

connectDB();

app.get("/public/index.html", async (req, res) => {
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

app.listen(5000, () => {
  console.log("Server is up and running on 5000 ...");
});