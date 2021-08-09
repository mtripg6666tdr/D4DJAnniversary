# D4DJAnniversary 
D4DJプロジェクトに関する記念日のデータをまとめたもの。

# 概要
各記念日データはCSVでまとめています。
場所は、`data/main.csv`です。
CSVよりJSONの方が使いやすい場合が多いことを考えてJSONでも同じデータを利用できます。
場所は、`dist/main.json`です。
CSVから自分でJSONに変換する場合には次のコマンドを使用します。
```bash
$ npm run build
```
# 使用方法
使用方法は使い方によります。
## NPMパッケージとして
パッケージインストール
```
$ npm install mtripg6666tdr/D4DJAnniversary
```
### require構文
```javascript
var data = require("D4DJAnniversary").load();
```
### module構文
```javascript
import D4A from "D4DJAnniversary";
var data = D4A.load();
```
## 単純データファイルとして
`data/main.csv`または`dist/main.json`をGitHubから直接ダウンロードして使用できます。
## データベースとして
`https://raw.githubusercontent.com/mtripg6666tdr/D4DJAnniversary/master/dist/main.json`のURLからプログラム上でダウンロードして使えます。
