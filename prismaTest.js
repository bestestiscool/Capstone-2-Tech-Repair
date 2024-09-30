require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


console.log(process.env.DATABASE_URL); // Should print the correct URL


async function testPrisma() {
  try {
    const projects = await prisma.project.findMany();
    console.log('Projects:', projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();
