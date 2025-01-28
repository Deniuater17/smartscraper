import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getProducts } from "../utils/helpers";

const ChartComponent = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Views",
                data: [],
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    });

    useEffect(() => {
        const fetchChartData = async () => {
            const products = await getProducts();

            // Agrupa views por días (simplificado para el ejemplo)
            const dailyViews = {};
            products.forEach((p) => {
                const date = new Date(p.lastUpdated || p.dateAdded).toLocaleDateString();
                dailyViews[date] = (dailyViews[date] || 0) + (p.views || 0);
            });

            const labels = Object.keys(dailyViews);
            const data = Object.values(dailyViews);

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Views Diarias",
                        data,
                        borderColor: "rgb(75, 192, 192)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                    },
                ],
            });
        };

        fetchChartData();
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
                Tendencia de Views Diarias
            </h3>
            <Line data={chartData} />
        </div>
    );
};

export default ChartComponent;
