const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //works
  findAllAvail: (req, res) => {
    db.Appointment.find({})
      .where({ user: null })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  findOneAppt: (req,res) => {
    db.Appointment.findById(req.params.id).populate("user","email")
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(422).json(err));
    
  },
  //works
  findApptByCust: (req, res) => {
    db.Appointment.find({})
      .where({ user: mongoose.Types.ObjectId(req.params.id) })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  delete: (req, res) => {
    db.Appointment.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id))
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  insert: (req, res) => {
    db.Appointment.collection
      .insertOne({
        apptDate: req.body.apptDate,
        apptTime: req.body.apptTime,
        user: null,
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //works
  setAppointment: (req, res) => {
    console.log(req.body.user);
    db.Appointment.findByIdAndUpdate(req.params.id, {
      user: mongoose.Types.ObjectId(req.body.user),
    },{new: true})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll: (req, res) => {
    db.Appointment.find({}).populate("user","email")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
