module.exports = class Greater {
  great(person) {
    if (person) {
      if (person.genre === 'F') {
        return `Hello Mrs. ${person.fullName}`
      } else {
        return `Hello Mr. ${person.fullName}`
      }
    }

    return 'Hello TDD';
  }
}
