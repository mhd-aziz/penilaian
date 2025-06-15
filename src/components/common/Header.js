import React from 'react';

const Header = ({ onLogout }) => (
  <header className="app-header">
    <h1>Aplikasi Penilaian Siswa "SMA NEGERI 91"</h1>
    <button onClick={onLogout}>Logout</button>
  </header>
);

export default Header;