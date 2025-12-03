# Prisma Installation SQLite

npm i -D prisma@^5.22.0
npm i @prisma/client@^5.22.0
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio

# Prisma Making Correction or Addition to migrations
npx prisma migrate dev --name fixed title on posts

# Faker For Database Seed
npm i @faker-js/fake

# Graphql 
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql