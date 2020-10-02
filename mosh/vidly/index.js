const express = require("express");
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "RomCom" },
  { id: 3, name: "Adventure" },
  { id: 4, name: "Sci-Fi" },
];
app.get("/api/genres/", (req, res) => {
  res.send(genres);
});

app.post("/api/genres/", (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

app.put("/api/genres/:id", (req, res) => {
  // look for the course

});

app.delete("/api/genres/:id", (req, res) => {});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to ${port}...`);
});
