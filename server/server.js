const express = require("express");
const cors = require("cors");
const { PrismaClient, Prisma } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/siswa", async (req, res) => {
  try {
    const allSiswa = await prisma.siswa.findMany({
      include: {
        kelas: true,
      },
    });
    res.json(allSiswa);
  } catch (error) {
    console.error("Error fetching siswa:", error);
    res.status(500).json({ message: "Gagal mengambil data siswa" });
  }
});

app.post("/api/siswa", async (req, res) => {
  const { nama_siswa, nama_wali, ...dataLainnya } = req.body;

  try {
    const newSiswa = await prisma.siswa.create({
      data: {
        ...dataLainnya,
        nm_siswa: nama_siswa,
        nm_wali: nama_wali,
        tgl_lahir: dataLainnya.tgl_lahir
          ? new Date(dataLainnya.tgl_lahir)
          : null,
      },
    });
    res.status(201).json(newSiswa);
  } catch (error) {
    console.error("Error creating siswa:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target = error.meta?.target || ["field"];
        return res.status(409).json({
          message: `Gagal menambahkan siswa. Kolom '${target.join(
            ", "
          )}' sudah digunakan.`,
        });
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({
        message:
          "Data yang dikirim tidak valid atau ada field wajib yang kosong.",
      });
    }

    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
});

app.get("/api/guru", async (req, res) => {
  try {
    const allGuru = await prisma.guru.findMany({
      include: {
        matpel: true,
      },
    });
    res.json(allGuru);
  } catch (error) {
    console.error("Error fetching guru:", error);
    res.status(500).json({ message: "Gagal mengambil data guru" });
  }
});

app.listen(port, () => {
  console.log(
    `Backend server running at http://localhost:${port} and connected to DB via Prisma`
  );
});
