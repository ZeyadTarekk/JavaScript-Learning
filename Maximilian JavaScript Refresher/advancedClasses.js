class Human {
  gender = "Male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Zeyad";

  myProperty = "zeyad testing";
  printMyName = () => {
    console.log(this.name);
  };
  myMethod = (num) => 2 * num;
}

const zeyadPerson = new Person();
zeyadPerson.printMyName();
zeyadPerson.printGender();
console.log(zeyadPerson.myProperty);
console.log(zeyadPerson.myMethod(5));
