import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  
  const user = await prisma.user.create({
    data: {
      email: "yakha@gmail.com",
      name: "Yakha",
      competences: {
        create: [
          { name: "JavaScript" },
          { name: "React" }
        ]
      }
    },
    include: {
      competences: true
    }
  });

  console.log(user);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});

