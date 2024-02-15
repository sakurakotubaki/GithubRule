/**
 *@constructor
 *@params {String} name JunichiHashimoto
 *@params {Number} age 35
 */

/*
constキーワードでは、再代入できない変数の宣言とその辺が参照する値（初期値）を定義できます。
*/
const book = "Kboy";
// もし実行したらエラーが出る!
console.log(book);

// 'const' declarations must be initialized.
// const a; constは、初期化されていない定数を宣言することはできません。

/*
letキーワードは、再代入可能な変数を宣言し、その変数を初期化することができます。letはconstと異なり初期を指定しない変数も宣言できます。初期値が指定されていない場合、変数はundefinedになります。
*/

let userName = "Kboy";
userName = "Jboy";
console.log(userName);
// undefinedのlet
let age;
console.log(age); // undefined

/**
 *@constant {String} まとめ
 *constは再代入できない変数を宣言するためのキーワードです。
 *letは再代入可能な変数を宣言するためのキーワードです。
 */

 // !をつけるとtrueとfalseを逆にする
let flag = true;
if (!flag) {
  console.log("flagはtrueです");
} else {
  console.log("flagはfalseです");
}
