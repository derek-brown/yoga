var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var yogaSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, require: true },
  phoneNum: { type: String, require: true },
  classID: { type: Array },
  date: { type: Date, default: Date.now }
});

var Yoga = mongoose.model("Yoga", yogaSchema);

module.exports = Yoga;
