class Contact {
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

  get firstName() {
    return this.firstName;
  }
  set firstName(firstname) {
    this.firstName = firstname;
  }
}
