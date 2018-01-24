const db = require("../models");

// Defining methods for the classController

module.exports = {
  create: function(req, res) {
    db.Class
      .create(req.body)
      .then(dbClass => res.json(dbClass))
      .catch(err => res.status(422).json(err));
  },
  read: function(req, res){
  	db.Class
  		.find(req.query)
  		.then(dbClass => res.json(dbClass))
  		.catch(err => res.status(422).json(err));
  }
};