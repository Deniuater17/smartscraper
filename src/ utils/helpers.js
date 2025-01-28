// Calcular tiempo medio en "reservados"
export const calculateAverageReservationTime = (products) => {
    const totalTimes = products.reduce((sum, product) => {
        if (product.dateAdded && product.dateReserved) {
            const diff = new Date(product.dateReserved) - new Date(product.dateAdded);
            return sum + diff;
        }
        return sum;
    }, 0);

    return products.length ? (totalTimes / products.length / (1000 * 60 * 60 * 24)).toFixed(2) : 0;
};

// Calcular media de views por día
export const calculateDailyViewChanges = (products) => {
    return products.map((product) => {
        const history = product.history || [];
        let totalChange = 0;

        for (let i = 1; i < history.length; i++) {
            const change = history[i].views - history[i - 1].views;
            totalChange += Math.abs(change);
        }

        const days = history.length - 1 || 1; // Evitar división por cero
        return (totalChange / days).toFixed(2);
    });
};
