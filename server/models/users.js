const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: {
    type: Date,
    required: true,
    set: (value) => {
      const date = new Date(value);
      date.setUTCHours(0, 0, 0, 0); 
      return date;
    }
  }
});


UserSchema.set("toJSON", {
  transform: (doc, ret) => {
    if (ret.dob) {
    
      const date = new Date(ret.dob);
      const day = String(date.getUTCDate()).padStart(2, "0");
      const month = String(date.getUTCMonth() + 1).padStart(2, "0"); 
      const year = date.getUTCFullYear();
      ret.dob = `${day}-${month}-${year}`;
    }
    return ret;
  }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
