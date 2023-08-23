// interfaces

// simple examples

interface Person {
  name: string;
  age: number;
}
// name 和 age 在这里都是必须的
// 接口 Person 定义了 zhangsan 这个对象的形状
// 在这个接口中，比接口属性多或者少都是不允许的
let zhangsan: Person = {
  name: "张三",
  age: 23, // 尝试注释这行会报错
  // nickname: '法外狂徒'    // 多出这行也会报错
};

console.log(zhangsan);
