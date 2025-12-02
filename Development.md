# Prisma Installation SQLite

npm i -D prisma@^5.22.0
npm i @prisma/client@^5.22.0
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio