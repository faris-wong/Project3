const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    hash: { type: String, require: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    created_at: { type: Date, default: Date.now },
  },  
  { collection: "auth" }
);

module.exports = mongoose.model("Auth", AuthSchema);
