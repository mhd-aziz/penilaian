// src/components/Siswa/SiswaForm.js
import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const SiswaForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    nis: "",
    nama_siswa: "",
    tmp_lahir: "",
    tgl_lahir: "",
    jkel: "L",
    alamat: "",
    telp: "",
    nama_wali: "",
    kd_kelas: "X-A",
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
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Form Input Siswa</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>NIS</Form.Label>
                <Form.Control
                  type="text"
                  name="nis"
                  value={formData.nis}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nama Siswa</Form.Label>
                <Form.Control
                  type="text"
                  name="nama_siswa"
                  value={formData.nama_siswa}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tempat Lahir</Form.Label>
                <Form.Control
                  type="text"
                  name="tmp_lahir"
                  value={formData.tmp_lahir}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control
                  type="date"
                  name="tgl_lahir"
                  value={formData.tgl_lahir}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select
                  name="jkel"
                  value={formData.jkel}
                  onChange={handleChange}
                >
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Telepon</Form.Label>
                <Form.Control
                  type="text"
                  name="telp"
                  value={formData.telp}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nama Wali</Form.Label>
            <Form.Control
              type="text"
              name="nama_wali"
              value={formData.nama_wali}
              onChange={handleChange}
            />
          </Form.Group>
          <hr />
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Menyimpan..." : "Simpan Data"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SiswaForm;
