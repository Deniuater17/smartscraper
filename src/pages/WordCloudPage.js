import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const WordCloudPage = () => {
    const words = [
        { text: 'funda', value: 10 },
        { text: 'carcasa', value: 8 },
        { text: 'cargador', value: 5 },
        { text: 'caja', value: 3 },
    ];

    const options = {
        enableTooltip: true,
        deterministic: true,
        fontFamily: 'impact',
        fontSizes: [10, 60], // Tamaño mínimo y máximo de las palabras
        rotations: 2, // Número de rotaciones posibles
        rotationAngles: [-90, 0], // Ángulos de rotación posibles
        scale: 'sqrt', // Escala para ajustar el tamaño de las palabras
        spiral: 'archimedean', // Tipo de espiral
    };
        // Si no hay datos, usa un array vacío
        const WordCloudPage = ({ words = [{ text: "default", value: 1 }] }) => {
            const safeWords = words && words.length ? words : [{ text: "No hay datos", value: 1 }];
        
            return (
                <div>
                    <h2>Nube de Palabras</h2>
                    <ReactWordcloud words={safeWords} />
                </div>
            );
        };
};

export default WordCloudPage;
