import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Starfield from './Starfield.jsx';
import Nebula from './Nebula.jsx';

export default function Layout() {
  return (
    <div className="cosmic-background no-scroll">
      {/* Background animation canvases */}
      <Nebula />
      <Starfield />

      <header className="header">
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p className="forged">Forged by Order of the Dev ✨</p>
        <p>© 2025 Tiberius Orion James. All rights reserved.</p>
      </footer>
    </div>
  );
}
