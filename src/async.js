import { resolve } from "core-js/fn/promise";

// setTimeout(() => {
//   console.log("OK");
// }, 1000);

// console.log("Prvo ide ovo");

// let wait = function (seconds) {
//   return new Promise((resolveFn) => {
//     setTimeout(resolveFn, seconds * 1000);
//   });
// };

// wait(1).then(() => {
//   console.log("ok");
// });

// console.log("prvo ide ovo")

// let wait = function (seconds) {
//   return new Promise((resolveFn) => {
//     setTimeout(resolveFn, seconds * 1000);
//   });
// };

// let zbroj = function (a, b) {
//   wait(5).then(() => {
//     return a + b; //promise (a+b)
//   });
// };

// console.log(zbroj(1, 2));

// zbroj(1, 2).then((r) => {
//   console.log(r);
// });

// zbroj(1, 2)
//   .then((r) => {
//     return zbroj(r, 3);
//   })
//   .then((r) => {
//     return zbroj(r, 4);
//   })
//   .then((r) => {
//     console.log(r);
//   });

// ASYNC/AWAIT

// let obicanZbroj = function(a,b){
//     return a+b;
// }
// let r = obicanZbroj(1,2);
// console.log(r)

let r2 = await zbroj(1, 2);
console.log(r2);
console.log("ovo ceka...");

let zbroj = async function (a, b) {
    await wait(5)

    return a+b; //automatski ovo pretvoriti u promise

};

let a = await zbroj(1,2)
let b = await zbroj(a,3)
let c = await zbroj(a,4)
let d = await zbroj(c,5)

console.log(d)
