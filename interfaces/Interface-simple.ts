// interfaces

// simple examples

interface IPerson {
  name: string;
  age: number;
  sayHi: ()=>void
}
// name 和 age 在这里都是必须的
// 接口 Person 定义了 zhangsan 这个对象的形状
// 在这个接口中，比接口属性多或者少都是不允许的
let zhangsan: IPerson = {
  name: "张三",
  age: 23, // 尝试注释这行会报错
  // nickname: '法外狂徒'    // 多出这行也会报错
  sayHi(){
    console.log(`my name is ${this.name}`)
  }
};

let luoxiang: IPerson = {
  name: "罗翔",
  age: 23, // 尝试注释这行会报错
  // nickname: '法外狂徒'    // 多出这行也会报错
  sayHi(){
    console.log(`my name is ${this.name}`, '同时我也是一名律师')
  }
};
console.log(zhangsan);
luoxiang.sayHi()
zhangsan.sayHi()
