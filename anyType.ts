// AnyType

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// 编译出错
let myFavoriteNumber: string = "seven";
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322:
// Type 'number' is not assignable to type 'string'.

let myName: any = "lv";
myName = 8;

let anyThing: any = "hello";
console.log(anyThing.myName);
console.log(anyThing.myName.firstName); // ts 会编译成功, js 会报 undefined

/* 
let something;
something = "seven";
something = 7;
something.setName("Tom"); // tsconfig.json 里 "strict": false, 
*/

export {};
