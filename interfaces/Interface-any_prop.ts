// interfaces

// 任意属性
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let zhangsan: Person = {
  name: "张三",
  age: 23,
  // 可以添加 nickname 属性
  nickname: "法外狂徒",
};
console.log(zhangsan);

// ps: 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person_1 {
  name: string;
  age: number;
  // 严格模式下，  [propName: string]: string | number 这种写法是不允许的
  // [propName: string]: string | number; // 允许
  [propName: string]: any; // 允许
  // [propName: string]: string   // 不允许
}

let zhangsan_1: Person_1 = {
  name: "张三",
  age: 23,
  nickname: "法外狂徒",
  creator: "罗翔",
  salary: 232222,
};

console.log(zhangsan_1);

export {};
