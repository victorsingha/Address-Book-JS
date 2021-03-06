const Controller = require("./Controller");
const prompt = require("prompt-sync")();

isContinue = true;
while (isContinue) {
  console.log(`Enter Choice:
  Add Contact    [1]
  Delete Contact [2]
  Edit Contact   [3]
  Show Contact   [4]
  Exit           [5]`);
  let input = prompt();
  switch (input) {
    case "1":
      Controller.addContact();
      break;
    case "2":
      Controller.deleteContact();
      break;
    case "3":
      Controller.editContact();
      break;
    case "4":
      Controller.showContact();
      break;
    case "5":
      console.log(input);
      isContinue = false;
      break;
    default:
      console.log(input);
      break;
  }
}
