import React, { useState, useEffect } from "react";
import SiswaList from "../components/Siswa/SiswaList";
import SiswaForm from "../components/Siswa/SiswaForm";
import { getSiswa, addSiswa } from "../services/api";

const SiswaPage = () => {
  const [siswa, setSiswa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSiswa = async () => {
    setIsLoading(true);
    const data = await getSiswa();
    setSiswa(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  const handleAddSiswa = async (data) => {
    if (data.tgl_lahir === "") {
      data.tgl_lahir = null;
    }

    try {
      setIsLoading(true);
      await addSiswa(data);
      alert("Siswa berhasil ditambahkan!");
      fetchSiswa();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan siswa. Pastikan NIS dan Username unik.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Manajemen Data Siswa</h2>
      <SiswaForm onSubmit={handleAddSiswa} isLoading={isLoading} />
      <h3>Daftar Siswa</h3>
      {isLoading && <p>Loading data...</p>}
      <SiswaList siswa={siswa} />
    </div>
  );
};

export default SiswaPage;
