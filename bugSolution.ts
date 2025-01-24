function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array
user.forEach(name => {
  console.log(greeter(name));
});

//Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string[] {
  return people.map(person => "Hello, "+ person + "!");
}
console.log(greeterArray(user));