// 函数表达式（Function Expression）
// 下面只做了等号右侧的类型定义， sum 只能通过类型推论
let sum = function (x: number, y: number): number {
  return x + y;
};

// 如果要手动添加sum1 类型
let sum1: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(sum(1, 2));
console.log(sum1(1, 2));
