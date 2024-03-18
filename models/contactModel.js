const mongoose = require("mongoose");
const contactsSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please add contact name"],
    },
    email: {
      type: "string",
      required: [true, "Please add email address"],
    },
    phone: {
      type: "string",
      required: [true, "Please add phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactsSchema);
