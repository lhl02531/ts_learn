function output(v: any): any {
  console.log(v, typeof v);
}

// union simple example
let myFavoriteNum: string | number;
myFavoriteNum = "seven";
output(myFavoriteNum);

myFavoriteNum = 7;
output(myFavoriteNum);

//  something.length 需要是 string 和 number 的公共属性或方法
/* function getLength(something: string | number): number {
    return something.length;    // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
    //   Property 'length' does not exist on type 'number'.
} */
