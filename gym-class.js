class Gym {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.members = [];
  }
  get _id() {
    return this.id;
  }
  addMember(member) {
    this.members.push(member);
  }
  get memebers() {
    return this.members;
  }
}
module.exports = Gym;
