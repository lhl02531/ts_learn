// 类型断言
// 使用场景
// 将一个联合类型断言为其中一个类型

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

/* 
function isFish(animal: Cat | Fish) {
  //   获取 animal.swim 的时候会报错
  //   因为 fish 和 cat 不共有 swim 方法
  if (typeof animal.swim === "function") {
    return true;
  }
  return false;
}
 */

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
}

function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

const tom: Cat = {
  name: "Tom",
  run() {
    console.log("tom run");
  },
};
console.log(tom);
// swim(tom); // 编译后执行 js 会报错
