const Person = require("../src/person");

describe("Test class person", () => {
  it("should test if a person have a first name, a last name and a full name", () => {
    const person = new Person({
      firstName: "Eleandro",
      lastName: "Duzentos",
    });

    expect(person).toHaveProperty("firstName");
    expect(person).toHaveProperty("lastName");
    expect(person).toHaveProperty("fullName");
    expect(person).toHaveProperty("genre");

    expect(person.firstName).toBe("Eleandro");
    expect(person.lastName).toBe("Duzentos");
    expect(person.fullName).toBe("Eleandro Duzentos");
  });
});
