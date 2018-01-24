var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classSchema = new Schema({
  classType: { type: String, required: true },
  classInfo: { type: String, required: true },
  classDate: {type: String, required: true  },
  date: { type: Date, default: Date.now }
});

var Class = mongoose.model("Class", classSchema);

module.exports = Class;
