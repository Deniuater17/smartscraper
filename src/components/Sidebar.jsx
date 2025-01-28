import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: "200px", background: "#333", color: "#fff", height: "100vh", padding: "20px" }}>
            <h3>Dashboard</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Inicio</Link>
                </li>
                <li>
                    <Link to="/statistics" style={{ color: "#fff", textDecoration: "none" }}>Estadísticas</Link>
                </li>
                <li>
                    <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/wordcloud" style={{ color: "#fff", textDecoration: "none" }}>Nube de palabras</Link>
                </li>
                <li>
                    <Link to="/history" style={{ color: "#fff", textDecoration: "none" }}>Historial</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

