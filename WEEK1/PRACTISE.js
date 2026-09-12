// let x = 10;
// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// const user = {
//   name: "Rahul"
// };

// user.name = "Aman";
// console.log(user.name);
//const prevents reassignment of the variable, but it does not make an object immutable.

// const means you cannot reassign the variable user itself.

// But you can change the properties inside the object.


// Convert this function into an arrow function:

// function add(a, b) {
//   return a + b;
// }
// // Arrow function version
// const add =(a,b) => a+b;    

// Convert this into an ES6 template literal:


// let name = "Rohit";
// let age = 22;

// console.log("My name is " + name + " and I am " + age + " years old.");

// console.log('MY name is ${name} and i am ${age} years old.')

// 1. **Destructuring**
    
//     What will be the output?
    
    // const user = {
    //   name: "Aman",
    //   age: 21
    // };
    
    // const { name, age } = user;
    
    // console.log(name);
    // console.log(age);

    //Destructuring lets you take values from an object and put them directly into variables.


    // 2. **Array Destructuring**
    
    // const numbers = [10, 20, 30];
    
    // const [a, b] = numbers;
    
    // console.log(a);
    // console.log(b);

    // // What will be the output?

//     const x = 10;

// if (true) {
//   const x = 20;
//   console.log(x);
// }

// console.log(x);

 let a = 5;

const change = () => {
  let a = 10;
  console.log(a);
};

change();
console.log(a);

const user = {
  name: "Riya",
  address: {
    city: "Jaipur"
  }
};

const {
  address: { city }
} = user;

console.log(city);

// 2. Given:

const student = {
  name: "Aman",
  age: 21,
  course: "MERN"
};


// Use destructuring to extract name and course.
const {name, course} = student;
console.log(name);
console.log(course);
