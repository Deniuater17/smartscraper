import React from "react";

const MetricCard = ({ title, value }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
);

export default MetricCard;
