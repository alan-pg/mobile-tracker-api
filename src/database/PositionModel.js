const  mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const PositionSchema = new Schema(
  {
    position: {
      type: pointSchema,
      required: true
    },
    speed: Number,
    direction: Number,
  },
  {
    timeseries: {
      timeField: "createdAt",
    },
    timestamps: true,
  }
);

const PositionModel = mongoose.model("Positions", PositionSchema);


module.exports = {
    PositionModel
}