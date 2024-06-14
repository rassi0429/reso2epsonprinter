# Reso2Epson
## セットアップ

TMシリーズ（でなくても行ける）のUSB接続に仮想シリアルポートを割り振るアプリ
[TM Virtual Port Driver](https://www.epson.jp/dl_soft/readme/33041.htm)

をインストールし、任意のCOMポートにプリンターを割り当ててください。

![image](https://hackmd.io/_uploads/S1cGMutS0.png)

`config.json`　の`host`を割り当てたCOMポートに編集します

## 使い方

https://github.com/receiptline/receiptline のマークダウンが書けます


`localhost:3001` にtext/plainをPOSTしてください。

https://receiptline.github.io/designer/

で書いたのをプレビューしたりできます。

### サンプル1
レシート
```
{image:iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwAQMAAADjOuD9AAAABlBMVEUAAAD///+l2Z/dAAAAZklEQVQoz2P4jwYYRrrABwYGOwYG5gMMDBUMDPxAgQcMDDJAgQYGhgJcAv//yMj//9/8//+HerAZRAsAzUASAJoGMhRF4AC6ANCIAhQz8AkAXQoUOIDidBQBkG8hAj8gAqPJAa8AAGjulhOsX97yAAAAAElFTkSuQmCC}
            市ヶ谷駅前店
    東京都千代田区九段1-Y-X

2019年 2月19日(火) 19:00
{border:line}
^領　収　証
{border:space}
{width:*,2,10}
ビール                 | 2|    ¥1,300
千鳥コース             | 2|   ¥17,280
-------------------------------------
{width:*,20}
^合計             |          ^¥18,580
現　　金          |           ¥20,000
お 釣 り          |            ¥1,420

```

### サンプル2
QRコード
```
{code:https://receiptline.github.io/designer/; option:qrcode,8,L}
```