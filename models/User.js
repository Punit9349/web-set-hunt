import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  rollNumber: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
  ,
  teamId: String,
  mobileNumber: String,
  teamName: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);

