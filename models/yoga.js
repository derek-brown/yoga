var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var yogaSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String, require: true },
  date: { type: Date, default: Date.now }
});

var Yoga = mongoose.model("Yoga", yogaSchema);

module.exports = Yoga;
