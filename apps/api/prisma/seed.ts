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