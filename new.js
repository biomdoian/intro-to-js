// ========== 1. OBJECTS ==========
// Objects are collections of key-value pairs.
// They allow us to store and structure data efficiently.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer",
    address: {
      city: "New York",
      country: "USA",
    },
  };
  
  console.log(person.firstName); // Accessing a property ("John")
  console.log(person["age"]); // Bracket notation (30)
  console.log(person.address.city); // Accessing nested objects ("New York")
  
  
  // ========== 2. MODIFYING OBJECTS ==========
  // Objects can be modified by adding, updating, or deleting properties.
  
  // Adding a new property
  person.email = "john.doe@example.com";
  console.log(person.email); // "john.doe@example.com"
  
  // Updating an existing property
  person.age = 31;
  console.log(person.age); // 31
  
  // Deleting a property
  delete person.job;
  console.log(person.job); // undefined
  
  
  // ========== 3. OBJECT ITERATION ==========
  // There are multiple ways to iterate over object properties.
  
  // Using 'for...in' loop (Iterates over all enumerable properties)
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // Using Object.keys() (Returns an array of keys)
  Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`);
  });
  
  // Using Object.values() (Returns an array of values)
  console.log(Object.values(person));
  
  // Using Object.entries() (Returns an array of key-value pairs)
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  
  // ========== 4. TRAVERSING NESTED OBJECTS ==========
  // When objects contain other objects or arrays, we need to traverse them recursively.
  
  function traverseObject(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverseObject(obj[key]); // Recursively calling the function for nested objects
      } else {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  traverseObject(person); // Logs all values inside the object, including nested ones.
  