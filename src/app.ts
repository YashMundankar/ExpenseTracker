import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.send("your IP is: " + req.ip);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});
