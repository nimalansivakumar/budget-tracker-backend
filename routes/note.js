const express = require("express");
const router = express.Router();
const Notes = require("../models/notes");

router.get("/fetchNotes/:userid", async (req, res) => {
  try {
    const fetchedNotes = await Notes.findOne({ id: req.params.userid });
    return res.json(fetchedNotes.notes);
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

router.post("/addNote", async (req, res) => {
  try {
    const { title, summary } = req.body.note;

    //check if the document exist in database
    const docsExist = await Notes.exists({ id: req.body.userid });

    const insertValues = async () => {
      await Notes.findOneAndUpdate(
        { id: req.body.userid },
        {
          $addToSet: {
            notes: {
              title: title,
              summary: summary,
            },
          },
        }
      );
    };

    //if exist insert data into the Document else create document
    if (docsExist) {
      insertValues();
    } else {
      const createNoteDoc = new Notes({
        id: req.body.userid,
      });

      await createNoteDoc.save();
      insertValues();
    }

    res.status(200).send("Data Recieved");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error!");
  }
});

router.post("/deleteNote", async (req, res) => {
  try {
    const { userid, noteID } = req.body;

    await Notes.updateOne(
      { id: userid },
      {
        $pull: {
          notes: {
            _id: noteID,
          },
        },
      }
    );

    res.status(200).send("Data Received");
  } catch (e) {
    console.log(e);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
