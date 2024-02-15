## DOM操作について学ぶ
[Event: preventDefault() メソッド](https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault)

preventDefaultはJavaScriptのメソッドで、ブラウザがイベントを自動的に処理するのを防ぎます。これは、特定のイベントが発生したときにブラウザがデフォルトで行う動作をキャンセルするために使用されます。

例えば、リンクをクリックしたときに新しいページに移動するのを防ぐ、またはフォームの送信を防ぐなどの動作をキャンセルすることができます。

```js
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
  // ここで何かの処理を行う
});
```
