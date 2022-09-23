const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const PositionSchema = new Schema(
  {
    position: {
      type: pointSchema,
      required: true,
    },
    address: {
      city: String,
      country: String,
      district: String,
      isoCountryCode: String,
      name: String,
      postalCode: String,
      region: String,
      street: String,
      streetNumber: String,
      subregion: String,
      timezone: String,
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
  PositionModel,
};
