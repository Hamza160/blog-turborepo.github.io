# Intialize Git
git init

# create .gitignore file
write
  node_modules
  **/node_modules/
  **/dist
  **/build

# create npm file
npm init -y

# install turbo
npm i -D turbo

# create turbo.json file
touch turbo.json
 write
{
  "tasks": {
    "build": {
      "dependsOn": [
        "^build"
      ],
      "outputs": [
        "dist/**"
      ]
    },
    "lint": {},
    "dev": {
      "cache": false
    }
  }
}

# inside package.json change scripts and add packageManager, workspaces
"scripts":{
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint"
}
"packageManager": "npm@10.7.0",
"workspaces":[
    "apps/*"
]


# create apps folder and craete nextjs and nestjs projects
mkdir apps
cd apps

npx create-next-app@latest frontend

nest new api

# now change start:dev to dev in apps/api/package.json file
# change port in apps/api/src/main from 3000 to 9000

# Installing Prisma apps/api
npm i -D prisma
npx prisma init --datasource-provider sqlite 

# add prisma models and run
write
model User {
  id        Int       @id @default(autoincrement())
  name      String
  email     String
  bio       String?
  avatar    String?
  password  String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  posts     Post[]
  comments  Comment[]
  likes     Like[]
}

model Post {
  id        Int       @id @default(autoincrement())
  slug      String?   @unique
  title     String
  content   String
  thumbnail String
  published Boolean
  authorId  Int
  author    User      @relation(fields: [authorId], references: [id])
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  comments  Comment[]
  tags      Tag[]     @relation("PostTags")
  likes     Like[]
}

model Comment {
  id        Int      @id @default(autoincrement())
  content   String
  postId    Int
  post      Post     @relation(fields: [postId], references: [id])
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[] @relation("PostTags")
}

model Like {
  id     Int  @id @default(autoincrement())
  userId Int
  user   User @relation(fields: [userId], references: [id])
  postId Int
  post   Post @relation(fields: [postId], references: [id])
}

npx prisma migrate dev --name init

# run prisma studio
npx prisma studio