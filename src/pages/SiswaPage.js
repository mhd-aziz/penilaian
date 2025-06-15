import React, { useState, useEffect } from "react";
import { Container, Button, Spinner, Alert, Collapse } from "react-bootstrap";
import SiswaList from "../components/Siswa/SiswaList";
import SiswaForm from "../components/Siswa/SiswaForm";
import { getSiswa, addSiswa } from "../services/api";

const SiswaPage = () => {
  const [siswa, setSiswa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const fetchSiswa = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getSiswa();
      setSiswa(data);
    } catch (err) {
      setError(
        "Gagal memuat data siswa. Silakan periksa koneksi atau hubungi administrator."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  const handleAddSiswa = async (data) => {
    if (data.tgl_lahir === "") {
      data.tgl_lahir = null;
    }

    try {
      await addSiswa(data);
      alert("Siswa berhasil ditambahkan!");
      setOpenForm(false);
      fetchSiswa(); 
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan siswa. Pastikan NIS dan Username unik.");
    }
  };

  const handleEdit = (siswaData) => {
    console.log("Edit siswa:", siswaData);
    alert(`Fitur edit untuk ${siswaData.nama_siswa} belum diimplementasikan.`);
  };

  const handleDelete = (nis) => {
    console.log("Hapus siswa dengan NIS:", nis);
    if (window.confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
      alert(`Fitur hapus untuk NIS ${nis} belum diimplementasikan.`);
    }
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h2>Manajemen Data Siswa</h2>
        <Button
          onClick={() => setOpenForm(!openForm)}
          aria-controls="siswa-form-collapse"
          aria-expanded={openForm}
        >
          {openForm ? "Tutup Form" : "+ Input Data Siswa"}
        </Button>
      </div>

      <Collapse in={openForm}>
        <div id="siswa-form-collapse">
          <SiswaForm onSubmit={handleAddSiswa} isLoading={isLoading} />
        </div>
      </Collapse>

      <h3 className="mt-4">Daftar Siswa</h3>

      {isLoading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Memuat data...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && !error && (
        <SiswaList siswa={siswa} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </Container>
  );
};

export default SiswaPage;
