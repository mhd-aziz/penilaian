// src/components/Guru/GuruList.js
import React from "react";
import { Table, Button } from "react-bootstrap";

const GuruList = ({ guru, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>NO</th>
          <th>NIP</th>
          <th>NAMA GURU</th>
          <th>TEMPAT LAHIR</th>
          <th>TANGGAL LAHIR</th>
          <th>L/P</th>
          <th>ALAMAT</th>
          <th>TELEPON</th>
          <th>MATA PELAJARAN</th>
          <th>AKSI</th>
        </tr>
      </thead>
      <tbody>
        {guru.length > 0 ? (
          guru.map((g, index) => (
            <tr key={g.nip}>
              <td>{index + 1}</td>
              <td>{g.nip}</td>
              <td>{g.nama_guru}</td>
              <td>{g.tmp_lahir_guru}</td>
              <td>{new Date(g.tgl_lahir_guru).toLocaleDateString("id-ID")}</td>
              <td>{g.kel_guru}</td>
              <td>{g.alamat}</td>
              <td>{g.telp}</td>
              <td>{g.matpel ? g.matpel.nama_matpel : "N/A"}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(g)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(g.nip)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="10" className="text-center">
              Tidak ada data guru yang ditemukan.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default GuruList;
