/* function unique(arr) {
    let element = new Set(arr);
    return Array.from(element);
    
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O

   */  

/* 
  function aclean(arr)  {
    let map = new Map();
    for (let word of arr ) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted , word );
    }
    return Array.from(map.values());
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era" */  

/* let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");  */  

/* let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];  

let readMessege = new WeakSet();

readMessege.add(messages[0]); //первое прочтение [0]
readMessege.add(messages[1]); //первое прочтение [1]

readMessege.add(messages[1]); // второе прочтение [1] // происходит в другой части кода 

console.log(readMessege.has(messages[1])); //true 
console.log(readMessege.has(messages[2])); //false 

messages.shift();  */  
 
/* 
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
]; 

let readTime = new WeakMap();

readTime.set(messages[1], new Date(2020 , 4 , 3 , 13 ,12 , 34 , 245));

alert(readTime) */  



 /* function sumSalaries(salaries) {

    let sum = 0 
  for(let value of Object.values(salaries)) {
    sum += value;
  }
  return sum ; 
  }

    
  
 
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log( sumSalaries(salaries) );

 */  

  /* function count(obj) {
    return Object.keys(obj).length;
  }

  let obj = {
    name: 'John',
    age: 30,
    gender: 'girl' ,
  };
  
  alert( count(obj) ); 

 */  

  

