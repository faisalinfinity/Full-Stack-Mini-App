const { raw } = require("express");
const { NotesModel } = require("../Model/NotesModel");

const AddNotes = async (req, res) => {
    console.log(req.body)
  try {
    let data = new NotesModel(req.body);
    await data.save();

    res.send({ msg: "New Notes has been added" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const DeleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await NotesModel.findByIdAndDelete({ _id: id });
    res.send({ msg: " Notes has been deleted" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const UpdateNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await NotesModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: " Notes has been deleted" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const GetNotes = async (req, res) => {
  try {
    let data = await NotesModel.find({ userID: req.body.userID });
    res.json({ data: data });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const GetSingleNotes = async (req, res) => {
  const { id } = req.params.id;

  try {
    let data = await NotesModel.find({ _id: id });
    res.json({ data: data });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
module.exports = { AddNotes, DeleteNotes, UpdateNotes, GetNotes ,GetSingleNotes};
