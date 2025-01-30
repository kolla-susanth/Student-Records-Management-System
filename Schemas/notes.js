const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 32,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Assuming you will store the URL or file path of the photo
    required: false, // Assuming the photo is not mandatory
  },
});

module.exports = mongoose.model("Notes", noteSchema);
