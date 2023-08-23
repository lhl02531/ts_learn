// interfaces

// 只读属性
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let zhangsan: Person = {
  id: 100001, //  如果注释掉，会报错
  name: "张三",
  gender: "男",
};
// 只读属性，不允许被修改
// zhangsan.id = 100002
console.log(zhangsan);
export {};
