// constructor = a special method of a class,
//                its accept argument and assigns properties

class Worker{ // class of Worker as blueprint

  constructor(name, position, startDate){ // constructor and its argument
    this.name = name;           // property name
    this.position = position;   // property position
    this.startDate = startDate; // property startDate
  }

  work(){
    console.log(`${this.name} start working as ${this.position} on ${this.startDate}`) // using tample literal
  }
}

const worker1 = new Worker("Ali", "Manager", "20 Augst 2023");   // new object is created base on the blueprint of Worker class
const worker2 = new Worker("Abu", "Cashier", "27 Augst 2023");   // new object is created base on the blueprint of Worker class
const worker3 = new Worker("Salim", "Janitor", "29 Augst 2023"); // new object is created base on the blueprint of Worker class

console.log(worker1.name);       // access worker1 name property
console.log(worker1.position);   // access worker1 position property
console.log(worker1.startDate);  // access worker1 startDate property

worker1.work() //invoke the work() methode