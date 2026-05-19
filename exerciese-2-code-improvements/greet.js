/*
Function that needs improvements 

function greet(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}
  
*/

// imporve version

const greet = (name) => {
  return name ? `Hello ${name}!` : `Hello`;
};

console.log(greet());
console.log(greet("James"));
