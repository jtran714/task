# Fullstack Application: Next.js 14, React, Prisma, Stripe, Tailwind, MySQL

Features: 
- Auth 
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder and copy
- Card creation
- Card description, rename, delete, drag & drop reorder and copy
- Card activity log
- Board limit for every organization
- Stripe subscription for each organization to unlock unlimited boards
- Landing page


### Install packages

```shell
npm i
```

### Setup Prisma

Add MySQL Database (for PlanetScale)

```shell
npx prisma generate
npx prisma db push

```
for migrations^

### Start the app

```shell
npm run dev
```