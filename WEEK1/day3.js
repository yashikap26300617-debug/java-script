// function sum(a,b){    // parameter
//     console.log(a+b)
// }
// sum(1,2)  //function calling argument 
// sum(11,52)


function ischeck (n){
    if(n%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

// arrow function
// a shorter, cleaner way to write functions

let warn=()=>{
    console.log("this is warning")
}
warn()

// traditional
const add = function (a, b) {
  return a + b;
};

// arrow
const add = (a, b) => a + b;

//Template literals 
// a modern way to create and work with strings in JavaScript
const name = "Aarav";
const price = 799;

// old way
"Hi " + name  + ", that costs ₹" + price;

// template literal
`Hi ${name}, that costs ₹${price}`;

// destructioning
// a way to extract values from arrays or objects and assign them to variables

const colors = ["red", "green", "blue"];
const [a, b] = colors;
console.log(b);

let obj={
    name:"",
    age:52
}let(name,age)=obj
console.log(name)

