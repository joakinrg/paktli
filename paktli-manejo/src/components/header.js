import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <div class="navbar">
      <div class="menu">
        <Link to="/articulos" class="nav-link">
          Artículos
        </Link>
        <Link to="/compras" class="nav-link">
          Compras
        </Link>
        <Link to="/historial" class="nav-link">
          Historial
        </Link>
      </div>
      <div class="actions">
        <span class="cart">&#128722;</span>
        <button class="logout">Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Header;
