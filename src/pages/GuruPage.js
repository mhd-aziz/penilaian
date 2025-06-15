// src/pages/GuruPage.js (Contoh yang lebih lengkap)
import React, { useState, useEffect } from "react";
import { Container, Form, Spinner, Alert, Button } from "react-bootstrap";
import GuruList from "../components/Guru/GuruList";
import { getGuru } from "../services/api"; // Nantinya kita akan tambah addGuru, updateGuru, deleteGuru

const GuruPage = () => {
  const [guru, setGuru] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuru = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getGuru();
        setGuru(data);
      } catch (err) {
        setError("Gagal memuat data guru. Silakan coba lagi.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGuru();
  }, []);

  const handleEdit = (guruData) => {
    // Logika untuk menampilkan form edit akan ditambahkan di sini
    console.log("Edit guru:", guruData);
    alert(`Fitur edit untuk ${guruData.nama_guru} belum diimplementasikan.`);
  };

  const handleDelete = (nip) => {
    // Logika untuk menghapus data akan ditambahkan di sini
    console.log("Hapus guru dengan NIP:", nip);
    if (window.confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
      alert(`Fitur hapus untuk NIP ${nip} belum diimplementasikan.`);
    }
  };

  const filteredGuru = guru.filter((g) =>
    g.nama_guru.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2>Manajemen Data Guru</h2>
        <Button variant="primary">+ Input Data Guru</Button>
      </div>

      <Form.Group className="my-3">
        <Form.Control
          type="text"
          placeholder="Cari Nama Guru..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Memuat data...</p>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!isLoading && !error && (
        <GuruList
          guru={filteredGuru}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default GuruPage;
