import React, { useState } from "react";

const SiswaForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    nis: "",
    nm_siswa: "",
    tmp_lahir: "",
    tgl_lahir: "",
    jkel: "L", 
    alamat: "",
    telp: "",
    nm_wali: "",
    kd_kelas: "", 
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="data-form">
      <h3>Input Data Siswa</h3>
      <input
        name="nis"
        value={formData.nis}
        onChange={handleChange}
        placeholder="NIS"
        required
      />
      <input
        name="nm_siswa"
        value={formData.nm_siswa}
        onChange={handleChange}
        placeholder="Nama Siswa"
        required
      />
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        name="tmp_lahir"
        value={formData.tmp_lahir}
        onChange={handleChange}
        placeholder="Tempat Lahir"
      />
      <input
        name="tgl_lahir"
        type="date"
        value={formData.tgl_lahir}
        onChange={handleChange}
        placeholder="Tanggal Lahir"
      />
      <select name="jkel" value={formData.jkel} onChange={handleChange}>
        <option value="L">Laki-laki</option>
        <option value="P">Perempuan</option>
      </select>
      <input
        name="alamat"
        value={formData.alamat}
        onChange={handleChange}
        placeholder="Alamat"
      />
      <input
        name="telp"
        value={formData.telp}
        onChange={handleChange}
        placeholder="Telepon"
      />
      <input
        name="nm_wali"
        value={formData.nm_wali}
        onChange={handleChange}
        placeholder="Nama Wali"
      />
      <input
        name="kd_kelas"
        value={formData.kd_kelas}
        onChange={handleChange}
        placeholder="Kode Kelas"
        required
      />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
};

export default SiswaForm;
