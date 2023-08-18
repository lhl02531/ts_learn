function addOne(n: number) {
  return n + 1;
}

// addOne("33"); // 类型报错
console.log(addOne(3));

// 例一
let x = 1;
// x = 'hello'; // 报错

// 例二
let y = { foo: 1 };
// delete y.foo; // 报错
// y.bar = 2; // 报错
