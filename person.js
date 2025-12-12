class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `meu nome é ${this.name}`;
  }
}

module.exports = {
  Person,
};
