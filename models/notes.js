const mongoose = require("mongoose");

const noteObject = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const NoteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  notes: [noteObject],
});

const Notes = mongoose.model("notes", NoteSchema);
module.exports = Notes;
