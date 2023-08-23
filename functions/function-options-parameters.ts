function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + lastName;
  } else {
    return firstName;
  }
}
// ts(1016)
// function buildName1(lastName?: string, firstName: string) {}
let tomcat = buildName("Tom", "Cat");
let tomcat1 = buildName("TomCat");

console.log(tomcat, tomcat1);
