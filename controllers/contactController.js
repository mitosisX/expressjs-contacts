const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.all();
  res.status(200).json(contacts);
});

// @route GET api/contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: `Getting contact id ${req.params.id}` });
});

// @route POST
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);

    throw new Error("All fields are required");
  }

  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

// @route PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const contact = await Contact.findById(res.params.id);
  if (!contact) {
    res.status(404);
  }
  // contact.update({ name, email, phone });

  res.status(200).json({ message: `Updated contact id ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting contact id ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
