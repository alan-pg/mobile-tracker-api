require("dotenv").config();
const db = require("./database/con");
const express = require("express");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Opa");
  res.send("Ok");
});

app.post("/position", async (req, res) => {
  console.log("save position", req.body);
  try {
    const saved = await db("positions").insert({
      device_id: req.body.device_id,
      lat: req.body.lat,
      lon: req.body.lon,
      speed: req.body.speed,
      direction: req.body.direction,
      type: req.body.type,
      mem: req.body.mem,
      date: new Date(req.body.date),
      created_at: new Date(),
    });
    if (saved) {
      console.log("position saved*", saved);
    } else {
      console.log("position not saved");
    }
    return res.status(200).json({ message: "success", payload: saved });
  } catch (error) {
    console.log("save position error", error);
    return res.status(500).json({ message: "error", payload: error.message });
  }
});

app.get("/position", async (req, res) => {
  const { inital_date, final_date, device_id } = req.query;
  const initialDate = new Date(inital_date);
  const finalDate = new Date(final_date);
  console.log("find position", { initialDate, finalDate });
  try {
    const positions = await db("positions")
      .where("device_id", device_id)
      .whereBetween("date", [initialDate, finalDate])
      .orderBy("date", "desc");

    return res.status(200).json({ message: "success", payload: positions });
  } catch (error) {
    console.log("error", error);
    return res.status(404).json({ message: "error" });
  }
});

app.listen(port, () => {
  console.log(`mobile gateway start on port ${port}`);
});
