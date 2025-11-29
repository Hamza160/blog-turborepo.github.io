

# Prisma Installation
npm i -D prisma
npm i @prisma/client
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma studio
