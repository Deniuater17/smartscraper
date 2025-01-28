import React, { useEffect, useState } from "react";
import WordCloud from "react-wordcloud";
import { getProducts } from "../utils/helpers";
import { getWordFrequency } from "../utils/keywords";

const WordCloudComponent = () => {
    const [wordData, setWordData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            const words = getWordFrequency(products);

            // Formatear datos para react-wordcloud
            const formattedWords = words.map(([text, value]) => ({ text, value }));
            setWordData(formattedWords);
        };

        fetchData();
    }, []);

    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontSizes: [10, 50],
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
                Nube de Palabras Clave de Productos Reservados
            </h3>
            <WordCloud words={wordData} options={options} />
        </div>
    );
};

export default WordCloudComponent;

