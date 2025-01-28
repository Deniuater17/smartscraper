import React from "react";
import Navbar from "./components/Sidebar";
import MetricCard from "./components/MetricCard";
import ChartComponent from "./components/ChartComponent";
import WordCloudComponent from "./components/WordCloudComponent";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard title="Tiempo Medio a Reservados" value="2 días" />
                    <MetricCard title="Views Totales" value="1234" />
                    <MetricCard title="Favoritos Totales" value="567" />
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ChartComponent />
                    <WordCloudComponent />
                </div>
            </div>
        </div>
    );
}

export default App;

