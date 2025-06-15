import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <b>FILE MASTER</b>
        </li>
        <li>
          <Link to="/siswa">Data Siswa</Link>
        </li>
        <li>
          <Link to="/guru">Data Guru</Link>
        </li>
        <li>
          <b>FILE TRANSAKSI</b>
        </li>
        <li>
          <b>FILE LAPORAN</b>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
