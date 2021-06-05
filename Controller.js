const Contact = require("./Contact");
const prompt = require("prompt-sync")();

var contactList = new Array();

let contact = new Contact(
  "john",
  "doe",
  "#432 baker streer",
  "pune",
  "mumbai",
  332333,
  6455463372,
  "john.doe@compass.com"
);

function addContact() {
  console.log("Contact Added");
}
function deleteContact() {}
function editContact() {}
function showContact() {}

module.exports = { addContact };
