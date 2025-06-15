import React, { useState, useEffect } from "react";
import GuruList from "../components/Guru/GuruList";
import { getGuru } from "../services/api";

const GuruPage = () => {
  const [guru, setGuru] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setGuru(getGuru());
  }, []);

  const filteredGuru = guru.filter((g) =>
    g.nama_guru.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Data Guru</h2>
      <input
        type="text"
        placeholder="Cari Nama..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GuruList guru={filteredGuru} />
    </div>
  );
};

export default GuruPage;
