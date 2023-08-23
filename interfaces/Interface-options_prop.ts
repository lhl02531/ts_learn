// interfaces

// 可选属性，属性前加 ?
interface Person {
  name: string;
  age?: number;
}
// 这个接口还是不允许添加未定义的属性
let zhangsan: Person = {
  name: "张三",
  // age: 23   //可选
  //   nickname: "法外狂徒", // 多出这行也会报错
};

console.log(zhangsan);
export {};
