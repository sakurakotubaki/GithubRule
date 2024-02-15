let item = ["Kboy", "Jboy", "Nboy"];
// reduceは、配列の各要素に対して、指定された関数を適用して単一の値にするメソッドです。
item.reduce((acc, name) => {
  console.log(acc);
  console.log(name);
  return acc + name;
}, "acc");

item.push("Sboy");
console.log(item);
// node js_basic/arr.js
