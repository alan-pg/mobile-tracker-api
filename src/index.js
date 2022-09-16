require("dotenv").config();
require('./database/con')
const express = require("express");
const { PositionModel } = require("./database/PositionModel");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Opa");
  res.send("Ok");
});

app.post("/position", async (req, res) => {
  const { lat, lon, speed, direction } = req.body;
  console.log(req.body);

try {
  const newPosition = new PositionModel({
    position: { type: "Point", coordinates: [lon, lat] },
    speed: speed,
    direction: direction,
  });
  
  await newPosition.save()
  console.log('position saved');
  
} catch (error) {
  console.log('save position error', error);
}

  return res.send("ok");
});

app.listen(port, () => {
  console.log(`mobile gateway start on port ${port}`);
});
