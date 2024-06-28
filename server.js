const express = require("express");
const cors = require("cors")
const { PrismaClient } = require("@prisma/client");

// Instance of HTTP Server
const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'https://quiz-kqv4ny875-sanjay-josephs-projects.vercel.app'
}));
app.use(express.json());

app.get("/app", (req, res) => {
  // From Client

  // DB Logic

  // to Frontend
  res.json({ message: "Get Method" });
});

app.get("/", async (req, res) => {
  // Frontend Data

  // Db Logic
  const data = await prisma.questionTwo.findMany();

  // Data to Frontend
  res.json({ data: data });
});

app.get("/:id", async (req, res) => {
  // Frontend Data
  const userId = req.params;
  console.log(userId.id);

  // Db Logic
  const data = await prisma.questionTwo.findUnique({
    where: {
      question_id: userId.id,
    },
  });

  // Data to Frontend
  res.json({ data: data });
});

app.post("/", async (req, res) => {
  // Frontend Data
  const userData = req.body;

  console.log("ss", userData);
  // Db Logic
  const data = await prisma.questionTwo.create({
    data: {
      id: userData.id,
      name: userData.name,
    },
  });

  // Data to Frontend
  res.json({ data: data, message: "questionTwo As Been Created Sucessfully" });
});

app.put("/", async (req, res) => {
  // Frontend Data
  const userData = req.body;

  console.log("ss", userData);
  // Db Logic
  const data = await prisma.questionTwo.update({
    data: {
      id: userData.id,
      name: userData.name,
    },
    where: {
      id: userData.id,
    },
  });

  // Data to Frontend
  res.json({ data: data, message: "questionTwo As Been Updated Sucessfully" });
});

app.delete("/", async (req, res) => {
  // Frontend Data
  const userData = req.body;

  console.log("ss", userData);
  // Db Logic
  const data = await prisma.questionTwo.delete({
    where: {
      question_id: userData.id,
    },
  });

  // Data to Frontend
  res.json({ data: data, message: "questionTwo As Been deleted Sucessfully" });
});

app.listen(5050);
