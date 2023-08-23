// 函数重载, function overload

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

console.log(reverse(123)); // 鼠标放在函数名是会有代码提示重载,overload
console.log(reverse("123")); // 鼠标放在函数名是会有代码提示重载,overload
// reverse({x:'123'})
