interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   return source.search(subString) !== -1;
// };
mySearch = function (source, subString) {
  return source.search(subString) !== -1;
};
let str = "Barry Allen is the flash";
let subString = "flash";
console.log(mySearch(str, subString));
