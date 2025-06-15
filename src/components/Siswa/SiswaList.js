import React from "react";

const SiswaList = ({ siswa }) => {
  if (siswa.length === 0) {
    return <p>Tidak ada data siswa untuk ditampilkan.</p>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>NIS</th>
          <th>Nama Siswa</th>
          <th>Username</th>
          <th>Jenis Kelamin</th>
          <th>Alamat</th>
          <th>Nama Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {siswa.map((s) => (
          <tr key={s.nis}>
            <td>{s.nis}</td>
            <td>{s.nm_siswa}</td>
            <td>{s.username}</td>
            <td>{s.jkel === "L" ? "Laki-laki" : "Perempuan"}</td>
            <td>{s.alamat}</td>
            <td>{s.kelas ? s.kelas.nm_kelas : "N/A"}</td>
            <td>
              <button>Edit</button>
              <button>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SiswaList;
