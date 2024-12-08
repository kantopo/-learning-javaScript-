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

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more"); 