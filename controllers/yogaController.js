const db = require("../models");

// Defining methods for the yogaController

module.exports = {
  create: function(req, res) {
    db.Yoga
      .create(req.body)
      .then(dbYoga => res.json(dbYoga))
      .catch(err => res.status(422).json(err));
  },
  read: function(req, res){
  	db.Yoga
  		.find(req.query)
  		.then(dbYoga => res.json(dbYoga))
  		.catch(err => res.status(422).json(err));
  },
  findOne: function(req, res){
    db.Yoga
    .findOne(req.query)
    .then(dbYoga => res.json(dbYoga))
    .catch(err => res.status(422).json(err));
  }
};