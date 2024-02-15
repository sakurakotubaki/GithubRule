# Gitコマンド集

--cashed オプションをつけると、ファイルを削除せずバージョン管理の対象から外すことができます。

```bash
git rm [ファイル名] --cached
```

`git log`の場合
```bash
hashimotojunichi@hashimotojunichinoMacBook-Air GithubRule % git log
commit 9b395de43ce6adec84003eb555faf1accd3ce0b6 (HEAD -> develop)
Author: JunichiHashimoto <gitonly543@gmail.com>
```

`git log --oneline`の場合
```bash
hashimotojunichi@hashimotojunichinoMacBook-Air GithubRule % git log --oneline
9b395de (HEAD -> develop) unko
```

直前のコミットを修正するには、`git commit --amend`を使います。

```bash
git commit --amend -m "新しいコミットメッセージ"
```

ひとつ前のコミットを`^`で戻す。
```bash
git rerset HEAD^
```

新しいブランチを作成して切り替えるには、`git checkout -b [ブランチ名]`を使います。

```bash
git checkout -b [ブランチ名]
```
