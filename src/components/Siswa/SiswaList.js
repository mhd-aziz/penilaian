// src/components/Siswa/SiswaList.js
import React from "react";
import { Table, Button } from "react-bootstrap";

const SiswaList = ({ siswa, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>NO</th>
          <th>NIS</th>
          <th>NAMA SISWA</th>
          <th>TEMPAT & TGL LAHIR</th>
          <th>L/P</th>
          <th>ALAMAT</th>
          <th>TELEPON</th>
          <th>NAMA WALI</th>
          <th>AKSI</th>
        </tr>
      </thead>
      <tbody>
        {siswa && siswa.length > 0 ? (
          siswa.map((s, index) => (
            <tr key={s.nis}>
              <td>{index + 1}</td>
              <td>{s.nis}</td>
              <td>{s.nama_siswa}</td>
              <td>{`${s.tmp_lahir}, ${new Date(s.tgl_lahir).toLocaleDateString(
                "id-ID"
              )}`}</td>
              <td>{s.jkel}</td>
              <td>{s.alamat}</td>
              <td>{s.telp}</td>
              <td>{s.nama_wali}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(s)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(s.nis)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" className="text-center">
              Tidak ada data siswa yang ditemukan.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default SiswaList;
