function buildName(firstName: string, lastName: string = "Cat") {
  return firstName + " " + lastName;
}

let tomcat = buildName("Tom", "Cat");
let tom = buildName("Tom");

console.log(tomcat);
console.log(tom);
export {};
