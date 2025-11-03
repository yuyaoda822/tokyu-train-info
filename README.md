# 東急線発車案内システム

東急線の発車時刻を案内する静的Webアプリケーションです。

## 🚀 機能

- **リアルタイム発車案内**: 上り・下りの直近4本の列車を表示
- **自動更新**: 1分ごとに時刻と発車案内を自動更新
- **警告色表示**: 発車までの残り時間に応じて色分け表示
  - 🔵 青: 30分以上（余裕あり）
  - 🟠 オレンジ: 15〜30分（注意）
  - 🔴 赤: 5〜15分（急ぎ）
- **ダイヤ切替**: 平日/休日ダイヤの自動判定と手動切替
- **ダークモード**: ライト/ダークモード切替対応
- **レスポンシブデザイン**: PC・スマートフォン両対応

## 📋 技術スタック

- **React 18**: UIフレームワーク
- **Vite**: ビルドツール
- **Tailwind CSS**: スタイリング
- **Lucide React**: アイコンライブラリ

## 🛠️ セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# プレビュー
npm run preview
```

## 📂 プロジェクト構造

```
tokyu-train-info/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.jsx       # ヘッダー
│   │   ├── CurrentTime.jsx  # 現在時刻表示
│   │   ├── DarkModeToggle.jsx # ダークモード切替
│   │   ├── DiagramSelector.jsx # ダイヤ選択
│   │   ├── DepartureBoard.jsx # 発車案内板
│   │   ├── DirectionColumn.jsx # 方向別カラム
│   │   └── TrainCard.jsx    # 列車カード
│   ├── data/                # データファイル
│   │   ├── trains-weekday.json  # 平日ダイヤ
│   │   ├── trains-holiday.json  # 休日ダイヤ
│   │   └── train-types.json     # 種別マスタ
│   ├── utils/               # ユーティリティ
│   │   ├── timeCalculator.js    # 時刻計算
│   │   ├── scheduleLoader.js    # ダイヤ読み込み
│   │   └── trainFilter.js       # 列車フィルタリング
│   ├── App.jsx              # メインアプリ
│   ├── main.jsx             # エントリーポイント
│   └── index.css            # グローバルスタイル
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 カスタマイズ

### ダイヤデータの更新

`src/data/trains-weekday.json` と `src/data/trains-holiday.json` を編集してください。

```json
{
  "trains": [
    {
      "id": 1,
      "direction": "up",
      "time": "06:00",
      "type": "local",
      "destination": "渋谷"
    }
  ]
}
```

### 種別の追加・変更

`src/data/train-types.json` を編集してください。

```json
{
  "trainTypes": {
    "local": {
      "name": "各駅停車",
      "color": "#666666"
    }
  }
}
```

## ⚙️ 設定

### Tailwind カラー設定

`tailwind.config.js` で種別カラーを変更できます。

```javascript
theme: {
  extend: {
    colors: {
      'train-local': '#666666',
      'train-express': '#FF6B6B',
      'train-limited': '#FF0000',
    }
  }
}
```

## 🔧 開発

### 開発サーバー

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開きます。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## 📱 動作確認済みブラウザ

- Google Chrome (最新版)
- Mozilla Firefox (最新版)
- Safari (最新版)
- Microsoft Edge (最新版)
- iOS Safari
- Android Chrome

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエストを歓迎します！

## 📧 お問い合わせ

問題や提案がある場合は、Issueを作成してください。

---

**開発日**: 2025年11月4日  
**バージョン**: 1.0.0

