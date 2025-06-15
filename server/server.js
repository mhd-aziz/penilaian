const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/siswa", async (req, res) => {
  try {
    const allSiswa = await prisma.sISWA.findMany({
      include: {
        kelas: true,
      },
    });
    res.json(allSiswa);
  } catch (error) {
    console.error("Error fetching siswa:", error);
    res.status(500).json({ error: "Gagal mengambil data siswa" });
  }
});

app.post("/api/siswa", async (req, res) => {
  try {
    const newSiswa = await prisma.sISWA.create({
      data: req.body,
    });
    res.status(201).json(newSiswa);
  } catch (error) {
    console.error("Error creating siswa:", error);
    res
      .status(500)
      .json({ error: "Gagal menambahkan data siswa", details: error.message });
  }
});

app.get("/api/guru", async (req, res) => {
  try {
    const allGuru = await prisma.gURU.findMany({
      include: {
        matpel: true,
      },
    });
    res.json(allGuru);
  } catch (error) {
    console.error("Error fetching guru:", error);
    res.status(500).json({ error: "Gagal mengambil data guru" });
  }
});

app.listen(port, () => {
  console.log(
    `Backend server running at http://localhost:${port} and connected to DB via Prisma`
  );
});
