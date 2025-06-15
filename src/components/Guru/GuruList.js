import React from "react";

const GuruList = ({ guru }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>NO</th>
        <th>NIP</th>
        <th>NAMA GURU</th>
        <th>TEMPAT LAHIR</th>
        <th>TANGGAL LAHIR</th>
        <th>JENIS KELAMIN</th>
        <th>ALAMAT</th>
        <th>TELEPON</th>
        <th>KODE MATA PELAJARAN</th>
        <th>NAMA MATA PELAJARAN</th>
        <th>AKSI</th>
      </tr>
    </thead>
    <tbody>
      {guru.map((g, index) => (
        <tr key={g.nip}>
          <td>{index + 1}</td>
          <td>{g.nip}</td>
          <td>{g.nama_guru}</td>
          <td>{g.tmp_lahir_guru}</td>
          <td>{g.tgl_lahir_guru}</td>
          <td>{g.kel_guru}</td>
          <td>{g.alamat}</td>
          <td>{g.telp}</td>
          <td>{g.kd_matpel}</td>
          <td>{g.nm_matpel}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GuruList;
