function output(v: any): any {
  console.log(v, typeof v);
}

// boolean

let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1); // 报错
let createdByNewBoolean: boolean = Boolean(1);
output(isDone);
output(createdByNewBoolean);

// number
let num: number = 6;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

output(num);
output(notANumber);
output(infinityNumber);

// string

let myName: string = "lv";
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month`;

output(myName);
output(sentence);

// 空值
// javascript 没有空值概念
//  在typescript中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
  alert("my name is tom");
}

let unusable: void = undefined;

output(unusable);

//  null undefined
let und: undefined = undefined;
let nul: null = null;

output(und);
output(nul);
console.log("undefined == null 结果：", und == nul);
console.log("undefined === null 结果：", und === nul);

export {};
