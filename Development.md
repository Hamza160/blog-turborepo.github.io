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
},
"packageManager": "npm@10.7.0",
"workspaces":[
    "apps/*"
],


# create apps folder and craete nextjs and nestjs projects
mkdir apps
cd apps

npx create-next-app@latest frontend

nest new api
cd api
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
npx prisma generate
# run prisma studio
npx prisma studio

# install faker-js
npm i @faker-js/faker

# create prisma module and service in nestjs project
nest g mo prisma
nest g s prisma


# now extends PrismaService class with PrismaClient and implement OnModuleInit and add onModuleInt function
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect()
    }
}

# create seed.ts inside prisma folder
write 
import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/ /g, '-') // Replace spaces with hypens
        .replace(/[^\w-]+/g, '') // Replace all non-word characters
}

async function main() {
    await prisma.comment.deleteMany()
    await prisma.like.deleteMany()
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
    const users = Array.from({ length: 10 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        bio: faker.lorem.sentence(),
        avatar: faker.image.avatar()
    }))

    await prisma.user.createMany({
        data: users
    })

    // Fetch real users after creation
    const createdUsers = await prisma.user.findMany();

    const posts = Array.from({ length: 40 }).map(() => {
        const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        return {
            title: faker.lorem.sentence(),
            slug: generateSlug(faker.lorem.sentence()),
            content: faker.lorem.paragraph(3),
            thumbnail: faker.image.urlLoremFlickr(),
            authorId: randomUser.id,
            published: true
        }
    })


    await Promise.all(posts.map(async (post) => {
        const randomUserForComment = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        return await prisma.post.create({
            data: {
                ...post,
                comments: {
                    createMany: {
                        data: Array.from({ length: 20 }).map(() => ({
                            content: faker.lorem.sentence(),
                            authorId: randomUserForComment.id,
                        }))
                    }
                }
            }
        })
    }));

    console.log("Seeding completed")
}

main().then(() => {
    prisma.$disconnect();
    process.exit(0)
}).catch(e => {
    prisma.$disconnect();
    console.error(e)
    process.exit(1)
})

# make password null in prisma user model
password?
npx prisma migrate dev --name fixing passwords

# add insdie apps/api/package.json scripts section
"db:seed": "ts-node ./prisma/seed.ts"
run
npm run db:seed

# setup graphql in nestjs application
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

# setup graphql module inside app.module file
 imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/grahql/schema.gql")
    }),
    PrismaModule
  ],

# Create Post module
nest g res post --no-spec

choose 
  GraphQL (code first)
  Would you like to generate CRUD entry points? (Y/n) Y

# Edit post.entity file
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  thumbnail?: string;

  @Field()
  content: string;

  @Field(() => Boolean)
  published: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}


