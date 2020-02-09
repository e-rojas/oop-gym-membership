const uniqid = require('uniqid');
class Member {
  constructor(name, age, email, address) {
    this.name = name;
    this.id = uniqid();
    this.age = age;
    this.email = email;
    this.address = address;
  }
  get info() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      email: this.email,
      address: this.address
    };
  }
}
module.exports = Member;
