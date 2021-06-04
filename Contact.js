class Contact {
  firstName;
  lastname;
  address;
  city;
  state;
  zip;
  phone;
  email;
  constructor(firstname, lastname, address, city, state, zip, phone, email) {
    this.firstName = firstname;
    this.lastname = lastname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }

  get getfirstName() {
    return this.firstName;
  }
  set setfirstName(firstname) {
    this.firstName = firstname;
  }

  printData() {
    console.log(`${this.firstName} ${this.lastname}`);
  }
}
