const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.repairCost.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  // Create a user
  const user = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "securepassword", // Make sure to hash passwords in a real app
    },
  });

  // Seed Repair Costs tied to the user
  await prisma.repairCost.createMany({
    data: [
      // iPhone Models
      {
        deviceType: "Phone",
        model: "iPhone 12",
        repairType: "Cracked Screen",
        cost: 250,
        estimatedTime: "1-2 hours",
        userId: user.id,  // Tie to the user
      },
      {
        deviceType: "Phone",
        model: "iPhone 12",
        repairType: "Battery Issue",
        cost: 150,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },
      {
        deviceType: "Phone",
        model: "iPhone 12",
        repairType: "Water Damage",
        cost: 300,
        estimatedTime: "1-2 days",
        userId: user.id,
      },

      // Samsung Models
      {
        deviceType: "Phone",
        model: "Samsung Galaxy S21",
        repairType: "Cracked Screen",
        cost: 270,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },
      {
        deviceType: "Phone",
        model: "Samsung Galaxy S21",
        repairType: "Battery Issue",
        cost: 140,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },

      // Google Pixel Models
      {
        deviceType: "Phone",
        model: "Google Pixel 5",
        repairType: "Cracked Screen",
        cost: 230,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },

      // MacBook Models
      {
        deviceType: "Laptop",
        model: "MacBook Pro (2020)",
        repairType: "Cracked Screen",
        cost: 600,
        estimatedTime: "1-2 days",
        userId: user.id,
      },
      {
        deviceType: "Laptop",
        model: "MacBook Pro (2020)",
        repairType: "Battery Issue",
        cost: 200,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },

      // Dell Models
      {
        deviceType: "Laptop",
        model: "Dell XPS 13",
        repairType: "Cracked Screen",
        cost: 500,
        estimatedTime: "1-2 days",
        userId: user.id,
      },
      {
        deviceType: "Laptop",
        model: "Dell XPS 13",
        repairType: "Battery Issue",
        cost: 160,
        estimatedTime: "1-2 hours",
        userId: user.id,
      },
    ],
  });

  // Seed Projects for the site owner
  await prisma.project.createMany({
    data: [
      {
        name: "First Project",
        description: "This is the first sample project created using a seeder",
        codeLink:
          "https://github.com/bestestiscool/Unit_42_Hatchaway_Snack_or_booze",
        liveDemoLink: "https://first-project-demo.com",
      },
      {
        name: "Second Project",
        description: "This is the second sample project created using a seeder",
        codeLink:
          "https://github.com/bestestiscool/Unit_41.3_React_History_exercise_jokes",
        liveDemoLink: "https://second-project-demo.com",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
