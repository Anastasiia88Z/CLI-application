const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(filePath);
    return JSON.parse(contacts);
} catch (error) {
  console.log(error.message);
 }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find(contact => contact.id === Number(contactId));
    return contactById;
  }
  catch(error) {
    console.log(error.message);
  }
}



module.export = {
  listContacts,
  getContactById
}