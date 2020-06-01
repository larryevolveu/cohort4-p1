
class Person {
    constructor() {
      console.log('Hello from People');
      this.age = 0;
    }
    birthday() {
      this.age++;
      console.log('I am ',this.age,'years old.');
    }
  }
  
  export default {Person};