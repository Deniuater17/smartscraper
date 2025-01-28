import React, { useEffect, useState } from "react";
import { fetchProductsFromFirebase } from "../services/firebaseService";

const DashboardPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState(""); // Texto para filtrar

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductsFromFirebase();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Cargando datos...</p>;
    }

    // Filtrar productos según el texto ingresado
    const filteredProducts = products.filter((product) =>
        product.titulo?.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <h2>Dashboard</h2>
            <input
                type="text"
                placeholder="Filtrar por palabra clave"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Views</th>
                        <th>Favorites</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.titulo || "Sin título"}</td>
                            <td>{product.views || 0}</td>
                            <td>{product.favorites || 0}</td>
                            <td>
                                <button onClick={() => moveToPending(product.id)}>
                                    Mover a Pendientes
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Función para mover un producto a "Pendientes"
const moveToPending = async (productId) => {
    console.log(`Mover el producto con ID ${productId} a Pendientes`);
    // Aquí puedes agregar la lógica para mover el producto a otra colección en Firebase
};

export default DashboardPage;
