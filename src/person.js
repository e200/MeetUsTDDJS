module.exports = class Person {
  constructor({ firstName, lastName, genre }) {
    this.firstName = firstName
    this.lastName = lastName
    this.genre = genre
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
