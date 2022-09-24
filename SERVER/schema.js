const mongoose = require("mongoose");

const userModelSchema = new mongoose.Schema({
  name:{
    type: String
  },
  mobile:{
    type: String
  },
  Address:{
    type: String
  },
  Age:{
    type: String
  },
  username:{
    type: String
  },
  password:{
    type: String
  },
  userType:{
    type: String
  }
});
const userModel = mongoose.model("user", userModelSchema);

module.exports = userModel;