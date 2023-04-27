/*--------------assign values in js

alert("hello world");
let age = 30;
age = 32;

console.log(age);

//--------------------data types in js--------------------------------

//strings,numbers, boolean,null,undefined,symbols
const name = "usman";
const age1 = 30;
const rating = 4.5;
const is_coll = true;
const x = null;

const y = undefined;

let z; //initialize

console.log(typeof name);

console.log(typeof y);
console.log(typeof rating);

//strings---------------------------------

//Concatenation

console.log("mny name is " + name + "my age is " + age1);

//template string
const hello = ` my name is ${name} and i am ${age1}`;
console.log(hello);

//find  the length of the string
const s = "hello world";
console.log(s.length);

const s1 = "hello world";
console.log(s.substring(0, 5));

const s2 = "hello world";
console.log(s2.split(""));

const s3 = "technology, code, it , programing";
console.log(s3.split(","));

//arrays --------------------------------

//constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//arrays --------------------------------

const fruits = ["apples", "bananas", "oranges"];
console.log(fruits);

fruits.push("apples");
fruits.unshift("ban");
console.log(Array.isArray("hello"));
console.log(fruits.indexOf("apples"));

//--------------------------------object literals----------------
//basically a key value pair

const person = {
  firstName: "John",
  lastName: "doe",
  age: 36,
  hobbies: ["music", "movies", "sports"],

  address: {
    home: "lahore",
    city: "karachi",
  },
};

console.log(person);

//extracting the values from the object

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(city);

//add properties to the object

person.email = "usman@gmail.com";
console.log(person);

//----------------array of objects

const todos = [
  {
    id: 1,
    text: "Hello",
    isComplete: true,
  },
  {
    id: 2,
    text: "world",
    isComplete: true,
  },
  {
    id: 3,
    text: "greetings",
    isComplete: true,
  },
];

console.log(todos[2].text);

//converting data in json format

const todos_json=JSON.stringify(todos);
console.log(todos_json);


//for loops


for (let i=0; i<10; i++)
{
  //console.log(i);
}

//while
let i=0;
while(i<10)
{
  i++;
 // console.log(i)
}




//high order array method-------- iteration on array
//forEach, map, filter

//map used for create a new array in an array
//which allow us to create a new array based on condition 


const todos = [
  {
    id: 1,
    text: "Hello",
    isComplete: true,
  },
  {
    id: 2,
    text: "world",
    isComplete: true,
  },
  {
    id: 3,
    text: "greetings",
    isComplete: true,
  },
];



for (let todo in todos)
{
  //console.log(todo.id);
}


//todos.forEach(function(todo) {
  //console.log(todo.id);

  
const todoText=todos.map(function(todo) {
  return todo.text
});

console.log(todoText);

*/

// const x=10;
// if (x==10)
// {
//   //console.log("x is 10");
// }

// const x1='10';
// if (x1==10)
// {
//   //console.log("x is 10");
// }

// const x2=10;
// if (x2===10)
// {
//   //console.log("x is 10");
// }

// //ternary operator shortend if statement assign a
// //variable based on condition

// const a=10;
// const color=a===10 ? 'red' : 'blue'

// console.log(color);

//arrow fun
// const add_num=(num1,num2)=>num1+num2

// console.log(add_num(5,2));

// simple fun
// function add_num1(num2,num3)
// {
//   return num2+num3;
// }

// console.log(add_num1(5,5));

//---------------------object oriented programing-----------------------

//(1) object literals  however we can construct objects constructor function
//(2)  we can use es6 classes

//-----------------------constructor fun--------------------------------

/*
function person(first_name,last_Name,D_o_b)
{
  this.first_name=first_name;
  this.last_Name=last_Name;
  this.D_o_b=new Date(D_o_b);

  //add fun to this object person

  this.get_birth_year=function()
  {
    return this.D_o_b.getFullYear();
  }

  this.getfullname=function()
  {
    return `${this.first_name} ${this.last_Name} `;
  }

}

//-------------------class--------------------------

class person{
  constructor(first_name,last_Name,D_o_b)
  { 
    this.first_name=first_name;
    this.last_Name=last_Name;
    this.D_o_b=new Date(D_o_b);

  }

  get_birth_year()
  {
    return this.D_o_b.getFullYear();
  }

  getfullname()
  {
    return `${this.first_name} ${this.last_Name} `;
  }
}

//instansiate object

{ 
  const person1=new person('usman','liaqat','12-23-2000')
  console.log(person1.D_o_b);
  console.log(person1.get_birth_year());
  console.log(person1.getfullname());
}

*/

//------------------------------DOM-------------------

//single elemnt

console.log(document.getElementById("lname"));

//multi element>

//----------------events--------------------

const btn = document.querySelector("#submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  document.querySelector('body').classList.add('bg-dark');
});


//forms script  

//for id we can get document.querySelector('fname')
//for class we can get document.querySelector('.class')

//my form.addEventListener('submit',onsubmit);

// function onsubmit(e)
// {
//   e.preventDefault();
//   console.log();
// }





