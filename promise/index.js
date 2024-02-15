// Promiseを使って、１秒ごとに、1,2,3と順番に表示する
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

delay(1000)
  .then(function () {
    console.log(1);
    return delay(1000);
  })
  .then(function () {
    console.log(2);
    return delay(1000);
  })
  .then(function () {
    console.log(3);
  });

// async/awaitを使って、１秒ごとに、1,2,3と順番に表示する
// asyncは、処理が始まるときに呼び出される関数の前に付ける。awaitは、実行する関数の前に付ける。
async function main() {
  await delay(1000);
  console.log(1);
  await delay(1000);
  console.log(2);
  await delay(1000);
  console.log(3);
}

main();
