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

## rebaseについて
rebaseは、他のブランチの変更を取り込むためのコマンドです。rebaseの[re(再度)base]するということ。baseというのは、そのブランチがどこからきたのかを意味する。developとfeat-1は、mainということになる。

git rebaseで、developブランチとfeat-1ブランチを合流させる。

このコマンドは、
```bash
git rebase feat-1
```

git rebaseしたら、pushするには、`--force`オプションをつける必要がある。

```bash
git push origin feat-1 --force
```

リベースを戻す
```bash
git reflog
```

## 特定のディレクトリのコミットを無しにしたい!
間違って、📁linuxディレクトリをコミットした😱
取り消す方法。

ディレクトリをコミットから取り消すには、git rm --cached -rコマンドを使用します。-rオプションは、ディレクトリ内のすべてのファイルを再帰的に削除するために使用されます。

以下のコマンドを実行してください：
```bash
git rm --cached -r linux
```

このコマンドは、linuxディレクトリとその中のすべてのファイルをGitの追跡から除外します。ただし、物理的なファイルは削除されません。

その後、変更を新たなコミットとして保存するために以下のコマンドを実行します：
```bash
git commit -m "Remove linux directory from tracking"
```

これで、linuxディレクトリはGitの追跡から除外されます。

## Reset, Revert
`git reset`は、コミットを取り消すコマンドです。`git revert`は、コミットを取り消すコマンドです。

最後のコミットを取り消すコマンド
```bash
git revert HEAD --no-edit
```

Revertを取り消すコマンド
```bash
git revert HEAD --no-edit
```
