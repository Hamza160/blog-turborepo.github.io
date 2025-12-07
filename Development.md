# Backend

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

# Class Validator

npm i class-validator

# Class Transformer

npm i class-transformer

# Password Hasher

npm i argon2

# JWT Service

npm i @nestjs/jwt

# GENERATE SECRET KEY

openssl rand -hex 32

# Config Module to Access ENV Variables

npm i @nestjs/config

# JWT Authentication

npm i @nestjs/passport passport passport-jwt
npm i -D @types/passport-jwt

# Guard

nest g gu auth/guards/jwt-auth

# Frontend

npx shadcn@latest init

