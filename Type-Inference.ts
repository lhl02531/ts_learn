function output(v: any): any {
  console.log(v, typeof v);
}

let myFavoriteNumber = "seven";

// myFavoriteNumber = 7; // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

let anyFavoriteNum;
anyFavoriteNum = "seven";
anyFavoriteNum = 7;

output(myFavoriteNumber);
output(anyFavoriteNum);

export {};
