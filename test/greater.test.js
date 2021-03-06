const Greater = require('../src/greater')

describe('Test class greater', () => {
  it('should check if class Greater is instanciable', () => {
    const greater = new Greater()
  })

  it('should class greater return Hello TDD if no person is given', () => {
    const greater = new Greater()

    expect(greater.great()).toBe('Hello TDD')
  })

  it('should great a woman using the Mrs. title', () => {
    const greater = new Greater()

    /**
     * In a real project this should be a mock of the
     * class Person and not a handmade object
     *
     * @url https://en.wikipedia.org/wiki/Mock_object
     */
    const person = {
      firstName: 'Maria',
      lastName: 'Joana',
      fullName: 'Maria Joana',
      genre: 'F',
    }

    expect(greater.great(person)).toBe('Hello Mrs. Maria Joana')
  })

  it('should great a man using the Mr. title', () => {
    const greater = new Greater()

    /**
     * In a real project this should be a mock of the
     * class Person and not a handmade object
     *
     * @url https://en.wikipedia.org/wiki/Mock_object
     */
    const person = {
      firstName: 'João',
      lastName: 'Vicente',
      fullName: 'João Vicente',
      genre: 'M',
    }
    
    const greating = greater.great(person)

    expect(greating).toBe('Hello Mr. João Vicente')
  })
})
