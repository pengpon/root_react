# Root
電商平台

## 連結
[前台](https://pengpon.github.io/root_react/)

[後台](https://pengpon.github.io/root_react/admin/)

## 需求
```bash
# 版面
- 前台
  - 需設定 RWD，不得出現 X 軸
  - 各頁面最小到 375px 都不能出現 x 軸、破版、跑版現象
- 後台
  - 畫面以 1920px 為標準，這個尺寸下不可出現 X 軸
  - table-responsive 產生的 X 軸可以的

# 內容
- 電商主題：產品數量需超過 10 個，完成加入購物車至結帳完成
- 首頁：除了 header、footer 之外至少還需要四到五個區塊
- 整個作品至少需要 5 頁完整頁面
- 產品／服務文案需完整：名稱、圖片、介紹（基本資料或長文字）、價格、其他推薦或說明（可參考範例）
- 完成至少一個主要流程
```

## 安裝
`node 使用 v24.12.0`
```bash
pnpm install

pnpm run
```

## 開發

### 專案架構
```
./apps
├── admin 後台管理系統 (Vite / React)
└── web 前台電子商務網站 (Vite / React)

./packages 共享套件
├── eslint-config (ESLint, Tailwind Config)
├── ui (Tailwind CSS)
└── utils (工具函式)
```

### 指令

**都在根目錄操作**

```bash
# 啟動 apps (web + admin)
pnpm dev

# 打包所有專案
pnpm build

# 只啟動前台專案
pnpm dev --filter web

# 只啟動後台專案
pnpm dev --filter admin

# 安裝套件到指定 app
pnpm add axios --filter web

# 安裝"共用套件" 到 web
pnpm add @repo/ui --filter web --workspace

```

## 打包 & 部署

使用 GitHub Actions, main 分支有異動時會直接執行 deploy.yml 進行打包部署