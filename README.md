# Root
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<p align="center">
  <img src="https://pengpon.github.io/root_react/meta/default.png" alt="Root Concept Store Preview" width="800">
</p>


## About
Root is a e-commerce side project built with React, consisting of a Storefront and a Admin Panel.

- Storefront: Integrated browsing, cart management (powered by Redux), and smooth checkout flow.

- Admin Panel: Secured access with authentication, coupon management, article publishing and product management.

- Tech Focus: Clean UI with Tailwind CSS, robust form validation via React Hook Form.


Root 是使用 React 開發的電商 Side Project，包含購物前台與後台管理系統

- 購物前台 (Storefront)：整合商品瀏覽、使用 Redux 進行購物車狀態管理，以及完整的結帳流程。

- 管理後台 (Admin Panel)：包含管理員身份認證 (Auth)、優惠卷管理、撰寫文章與商品上架管理。

- 技術重點 (Tech Focus)：使用 Tailwind CSS 打造簡潔 UI、透過 React Hook Form 進行表單驗證。



## Link
[Storefront](https://pengpon.github.io/root_react/)

[Admin Panel](https://pengpon.github.io/root_react/admin/)


## Install
`node version: v24.12.0`
```bash
pnpm install

pnpm run
```

## Development

### Monorepo Structure
```
./apps
├── admin (Vite / React)
└── web (Vite / React)

./packages
├── eslint-config (Shared Linting & Tailwind Config)
├── ui (Shared Tailwind Components)
└── utils (Shared Utilities)
```

### Scripts

**All commands should be executed from the root directory.**

```bash
# Start all apps (Web + Admin)
pnpm dev

# Build all projects
pnpm build

# Start only the Storefront (Web)
pnpm dev --filter web

# Start only the Admin Panel
pnpm dev --filter admin

# Install a package to a specific app
pnpm add axios --filter web

# Install a "shared package" from the workspace to Web
pnpm add @repo/ui --filter web --workspace

```

## Build & Deployment

This project uses GitHub Actions. Any changes pushed to the main branch will automatically trigger deploy.yml for building and deployment.