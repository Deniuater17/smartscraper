import React, { useEffect, useState } from "react";
import { fetchProductsFromCollection } from "../services/firebaseService";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Legend,
    Tooltip,
} from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip);

const Statistics = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchProductsFromCollection();
                console.log("Datos obtenidos desde Firebase:", data);
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, []);

    if (loading) {
        return <p>Cargando estadísticas...</p>;
    }

    // Preparar datos para el gráfico
    const data = {
        labels: products.map((p) => p.titulo),
        datasets: [
            {
                label: "Views",
                data: products.map((p) => p.views || 0),
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                fill: true,
            },
            {
                label: "Favorites",
                data: products.map((p) => p.favorites || 0),
                borderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255,99,132,0.2)",
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    return (
        <div>
            <h2>Estadísticas de Productos</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default Statistics;



