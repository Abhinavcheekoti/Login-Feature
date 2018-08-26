var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sign-in', { useNewUrlParser: true });
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    name : String,
    id: String,
    roomNo: String
})

var model = mongoose.model("users",userDataSchema);

module.exports = model;



