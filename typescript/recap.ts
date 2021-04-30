const myName = 'Nicolas';
const myAge = 12;

const add = (a: number, b: number) => {
  return a + b;
};

add(10, 12);

class Person {
  constructor(private age: number, private name: string) {
    this.name = name;
    this.age = age;
  }

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const alexei = new Person(15, 'Alexei');
alexei.getSummary();
