// src/components/common/Sidebar.js
import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuHeaderStyle = {
    padding: "0.5rem 1rem",
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  return (
    <div className="sidebar vh-100 bg-dark text-white p-3">
      <h5 className="mb-4 mt-2">Menu Utama</h5>

      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/dashboard" className="text-white">
          Dashboard
        </Nav.Link>

        <div style={menuHeaderStyle}>FILE MASTER</div>
        <Nav.Link as={NavLink} to="/siswa" className="text-white ps-4">
          Data Siswa
        </Nav.Link>
        <Nav.Link as={NavLink} to="/guru" className="text-white ps-4">
          Data Guru
        </Nav.Link>

        <div style={menuHeaderStyle}>FILE TRANSAKSI</div>
        <Nav.Link as={NavLink} to="/penilaian" className="text-white ps-4">
          Input Nilai
        </Nav.Link>

        <div style={menuHeaderStyle}>FILE LAPORAN</div>
      </Nav>
    </div>
  );
};

export default Sidebar;
