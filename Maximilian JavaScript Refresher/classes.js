class Human {
  constructor() {
    this.gender = "Male";
    console.log("Human Created");
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Zeyad";
    console.log("Person created");
  }
  printMyName() {
    console.log(this.name);
  }
}

const zeyadPerson = new Person();
zeyadPerson.printMyName();
zeyadPerson.printGender();
