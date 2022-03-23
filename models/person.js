const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create person schema & model
const PersonSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    department: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 255,
    },
    class: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      maximum: 59999999999,
      min: 5000000000,
      unique: true,
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
