const Contact = require("./Contact");
const prompt = require("prompt-sync")();

var contactList = new Array();

function addContact() {
  const firstname = prompt("Enter firstname : ");
  const lastname = prompt("Enter lastname : ");
  const address = prompt("Enter address : ");
  const city = prompt("Enter city : ");
  const state = prompt("Enter state : ");
  const zip = prompt("Enter zip : ");
  const phone = prompt("Enter phone : ");
  const email = prompt("Enter email : ");

  let contact = new Contact(
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
    phone,
    email
  );
  contactList.push(contact);
}
var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
function deleteContact() {
  const firstname = prompt("Enter firstname : ");
  contactList = removeByAttr(contactList, "firstname", firstname);
}
function editContact() {}
function showContact() {
  console.log(contactList);
}

module.exports = { addContact, deleteContact, editContact, showContact };
