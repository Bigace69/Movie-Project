let message = "Hello, Console!";
console.log(message); // This will print "Hello, Console!" in the browser console

let movie = "Lord of the Rings";
console.log(movie); // This will print "Lord of the Rings" in the browser console


const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
  ];
  
  // Using console.table
  console.table(users);
  
  console.error("Something went wrong!");
console.warn("This is a warning!");

console.time("Loop time");
for (let i = 0; i < 1000000; i++) {} // Simulating a loop
console.timeEnd("Loop time");
