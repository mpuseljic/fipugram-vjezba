function sinkronaFunkcija(x) {
  return 1 / x;
}
import { resolve } from "core-js/fn/promise";

let y = sinkronaFunkcija(10);

console.log("REZULTAT: ", y);

// 1) callback funckije
// 2) promise -> then i catch
// 3) async/await

let handle = setTimeout(function () {
  // callback funkcija
  console.log("nakon 3 sekunde ovdje sam...");
}, 3000);
console.log("setTimeout", handle);

function dohvati(url, callbackFn) {
  setTimeout(function () {
    callbackFn(`ovo je rezultat s interneta ${url}`);
  }, 4000);
  return "ovo nije pravi rezultat, pricekaj malo";
}

let r = dohvati("www.google.hr", function (r2) {
  console.log("asinkroni rezultat", r2);
});
console.log(r);

// PROMISE

function wait(miliseconds) {
  return new Promise((callbackFn) => setTimeout(callbackFn, miliseconds));
}

wait(5000).then(function () {
  console.log("nakon 5 sekundi");
});

function sink(x) {
  return 1 / x;
}

function asink(x) {
  return wait(5000).then(() => sink());
}

let rezultat = sink(10);
console.log(rezultat);

let rezultat2 = asink(10).then((rezultat3) => {
  console.log("ovo je pravi rezultat asinkrone funckije", rezultat3);
});
console.log(rezultat2);
