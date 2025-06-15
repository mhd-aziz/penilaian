import React from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

const Dashboard = () => {
  const jumlahSiswa = 150;
  const jumlahGuru = 12;

  return (
    <Container fluid>
      <Alert variant="success" className="mt-4">
        <Alert.Heading>Selamat Datang, Admin!</Alert.Heading>
        <p>Anda telah berhasil login ke sistem penilaian siswa.</p>
      </Alert>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header as="h5">Jumlah Siswa</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>
                {jumlahSiswa}
              </Card.Title>
              <Card.Text>Total siswa yang terdaftar di sekolah.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center">
            <Card.Header as="h5">Jumlah Guru</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{jumlahGuru}</Card.Title>
              <Card.Text>Total guru yang mengajar di sekolah.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="p-5 mt-4 bg-light rounded-3">
        <h2>Tentang Aplikasi</h2>
        <p>
          Ini adalah aplikasi web sederhana untuk manajemen data siswa, guru,
          serta penilaian akademik. Gunakan menu di samping untuk navigasi.
        </p>
      </div>
    </Container>
  );
};

export default Dashboard;
