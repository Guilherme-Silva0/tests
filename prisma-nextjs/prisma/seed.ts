import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function products() {
  await prisma.product.deleteMany();

  const quantity = 12;

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        color: `${faker.color.human()} and ${faker.color.human()}`,
        href: faker.internet.url(),
        imageSrc: faker.image.cats(),
        imageAlt: faker.lorem.sentence(),
        price: faker.datatype.number({
          min: 1000,
          max: 2000,
        }),
      },
    });
  });
}

async function seed() {
  await products();
}

seed().finally(() => prisma.$disconnect());
