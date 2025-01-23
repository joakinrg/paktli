import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Inicio from "./pages/inicio";
import Articulos from "./pages/articulos";
import Compras from "./pages/compras";
import Historial from "./pages/historial";

function App() {
    return (
        <div>
        <Routes>
            <Route
            path="/"
            element={
                <>
                <Header />
                <Inicio />
                </>
            }
            />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/historial" element={<Historial />} />
        </Routes>
        </div>
    );
}

export default App;
